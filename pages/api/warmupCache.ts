// pages/api/warmupCache.ts
import fs from 'fs';
import path from 'path';
import { withAxiom, Logger } from 'next-axiom';
import type { NextApiResponse } from 'next';

const DynamicFolderRoute = [
  '/menu/1',
  '/menu/1/history',
  '/product-recipes/1/recipe-info',
  '/product-recipes/1/recipe-info/add',
];

// baseURL을 가져오는 함수
const getBaseURL = () => {
  switch (process.env.NEXT_PUBLIC_DEPLOYMENT_ENV) {
    case 'dev':
      return 'https://dev.govis2.gopizza.kr';
    case 'prod':
      return 'https://govis2.gopizza.kr';
    default:
      return 'http://localhost:3000';
  }
};

// baseURL 변수 설정
const baseURL = getBaseURL();

// 배치 크기 설정
const BATCH_SIZE = 5;

// 동적 라우트를 스캔하는 함수
function scanDynamicRoutes(directory: string) {
  const files = fs.readdirSync(directory);
  const dynamicRoutes: string[] = []; // 타입을 명시적으로 선언

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 디렉터리인 경우 재귀적으로 스캔
      if (file.includes('[') && file.includes(']')) {
        // 디렉터리 이름에 대괄호가 포함되어 있으면 동적 폴더로 간주
        const dynamicFolder = `/${path
          .relative('pages', directory)
          .replace(/\\/g, '/')}/${file}`;
        dynamicRoutes.push(dynamicFolder);
        dynamicRoutes.push(...scanDynamicRoutes(filePath));
      } else {
        dynamicRoutes.push(...scanDynamicRoutes(filePath));
      }
    } else if (
      file.includes('[') &&
      file.includes(']') &&
      file.endsWith('.tsx')
    ) {
      // 파일 이름에 대괄호가 포함되어 있고 .tsx 확장자를 가지면 동적 라우트로 간주
      const route = `/${path
        .relative('pages', filePath)
        .replace(/\\/g, '/')
        .replace(/\.tsx?$/, '')}`;
      dynamicRoutes.push(route);
    }
  });

  return dynamicRoutes;
}

// 캐시를 워밍업하는 함수
async function warmupCache(route: string) {
  const url = `${baseURL}${route}`;
  console.log(`Warming up cache for ${url}`);
  try {
    const response = await fetch(url);
    if (response.ok) {
      console.log(`Cache warmed for ${url}`);
    } else {
      console.error(`Failed to warm cache for ${url}: ${response.statusText}`);
    }
  } catch (error: any) {
    console.error(`Failed to warm cache for ${url}: ${error.message}`);
  }
}

// 주요 함수
async function warmupCacheForDynamicRoutes() {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const dynamicRoutes = scanDynamicRoutes(pagesDirectory);

  const staticRoutes = dynamicRoutes.map(route =>
    route.replace(/\[.*?\]/g, 'view/1')
  );

  // 동적 라우트와 사용자 지정 라우트 병합
  const allRoutes = [...staticRoutes, ...DynamicFolderRoute];

  // 정적 라우트를 사용하여 캐시 워밍업 작업 수행
  for (let i = 0; i < allRoutes.length; i += BATCH_SIZE) {
    const batch = allRoutes.slice(i, i + BATCH_SIZE);
    // eslint-disable-next-line no-await-in-loop
    await Promise.all(batch.map(route => warmupCache(route)));
  }
}

const handleRequest = withAxiom(async (req: any, res: NextApiResponse) => {
  const log = new Logger();
  if (req.method === 'POST') {
    // req.log.info('res', res); 테스트
    log.info('res', res);
    await warmupCacheForDynamicRoutes(); // 이 부분 수정
    res.status(200).send('Cache warmup complete');
  } else {
    res.status(405).send('Method Not Allowed');
  }
});

export default handleRequest;

// pages/api/warmupCache.ts
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

const DynamicFolderRoute = [
  '/menu/1',
  '/menu/1/history',
  '/product-recipes/1/recipe-info',
  '/product-recipes/1/recipe-info/add',
];

// baseURL을 가져오는 함수
const getBaseURL = (githubCommitRef: string) => {
  console.log('githubCommitRef getBaseUrl', githubCommitRef);
  switch (githubCommitRef) {
    case 'dev':
      return 'https://dev.govis2.gopizza.kr';
    case 'master':
      return 'https://govis2.gopizza.kr';
    default:
      return 'http://localhost:3000';
  }
};

// 배치 크기 설정
const BATCH_SIZE = 10;

// 동적 라우트를 스캔하는 함수
function scanDynamicRoutes(directory: string) {
  const files = fs.readdirSync(directory);
  const dynamicRoutes: string[] = [];

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      dynamicRoutes.push(...scanDynamicRoutes(filePath)); // 재귀적으로 디렉터리 스캔
    } else if (
      file.includes('[') &&
      file.includes(']') &&
      file.endsWith('.tsx')
    ) {
      // 동적 파일을 찾은 경우
      const route = `/${path
        .relative('pages', filePath)
        .replace(/\\/g, '/')
        .replace(/\.tsx?$/, '')}`;
      dynamicRoutes.push(route);

      // index 파일과 history 파일이 있는지 확인
      const dir = path.dirname(filePath);
      ['index', 'history'].forEach(filename => {
        const additionalFilePath = path.join(dir, `${filename}.tsx`);
        if (fs.existsSync(additionalFilePath)) {
          const additionalRoute = `/${path
            .relative('pages', additionalFilePath)
            .replace(/\\/g, '/')
            .replace(/\.tsx?$/, '')}`;
          dynamicRoutes.push(additionalRoute);
        }
      });
    }
  });

  return dynamicRoutes;
}

// 캐시를 워밍업하는 함수
async function warmupCache(route: string, baseURL: string) {
  const url = `${baseURL}${route}`;

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
async function warmupCacheForDynamicRoutes(baseURL: string) {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const dynamicRoutes = scanDynamicRoutes(pagesDirectory);

  // 동적 라우트의 동적 부분을 '1'로 대체
  const staticRoutes = dynamicRoutes.map(route =>
    route.replace(/\[.*?\]/g, 'view/1')
  );

  // 동적 라우트와 사용자 지정 라우트 병합
  const allRoutes = [...staticRoutes, ...DynamicFolderRoute];

  // 정적 라우트를 사용하여 캐시 워밍업 작업 수행.
  for (let i = 0; i < allRoutes.length; i += BATCH_SIZE) {
    const batch = allRoutes.slice(i, i + BATCH_SIZE);
    // eslint-disable-next-line no-await-in-loop
    await Promise.all(batch.map(route => warmupCache(route, baseURL)));
  }
}

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { githubCommitRef } = req.body.payload.deployment.meta;
    // 주소 자동
    const baseURL = await getBaseURL(githubCommitRef);
    console.log('githubCommitRef:', githubCommitRef, baseURL);

    await warmupCacheForDynamicRoutes(baseURL); // 이 부분 수정
    res.status(200).send('Cache warmup complete');
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
export default handleRequest;
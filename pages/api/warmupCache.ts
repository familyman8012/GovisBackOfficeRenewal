// pages/api/warmupCache.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const pages = [
  '/product/add',
  '/material/add',
  '/material/partner/add?category=pct_manufacturer&current_num=1&per_num=10',
  '/material/shipping/add/1',
  '/menu/1',
  '/menu/history/1',
  '/product-recipes/1/recipe-info',
  '/product-recipes/1/recipe-info/add',
];

const getBaseURL = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return 'http://localhost:3000';
    case 'production':
      return process.env.VERCEL_URL?.includes('dev')
        ? 'https://dev.govis2.gopizza.kr'
        : 'https://govis2.gopizza.kr';
    default:
      return 'http://localhost:3000';
  }
};

const baseURL = getBaseURL();

const BATCH_SIZE = 5;

const warmupCache = async () => {
  for (let i = 0; i < pages.length; i += BATCH_SIZE) {
    const batch = pages.slice(i, i + BATCH_SIZE);
    // eslint-disable-next-line no-await-in-loop
    await Promise.all(
      batch.map(async page => {
        const url = `${baseURL}${page}`;
        console.log(`Warming up cache for ${url}`);
        try {
          const response = await fetch(url);
          if (response.ok) {
            console.log(`Cache warmed for ${url}`);
          } else {
            console.error(
              `Failed to warm cache for ${url}: ${response.statusText}`
            );
          }
        } catch (error: any) {
          console.error(`Failed to warm cache for ${url}: ${error.message}`);
        }
      })
    );
  }
};

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    await warmupCache();
    res.status(200).send('Cache warmup complete');
  } else {
    res.status(405).send('Method Not Allowed'); // 405 Method Not Allowed 응답을 반환
  }
};

export default handleRequest;

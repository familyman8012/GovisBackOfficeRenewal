import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Goivs2Menu, TotalMenu } from '@ComponentFarm/layout/MenuData';

// TotalMenu에서 모든 path 추출
const totalPaths = TotalMenu.flatMap(item => {
  if (item.depth2) {
    return item.depth2.map(subItem => subItem.path);
  }
  return item.path;
});

// Goivs2Menu에 없는 path만 filter
const redirectPaths = totalPaths.filter(path => !Goivs2Menu.includes(path));

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // redirectPaths에 포함되면 리다이렉트
  if (redirectPaths.includes(path)) {
    const host =
      req.url.includes('dev') || req.url.includes('localhost')
        ? 'https://dev.govis.gopizza.kr'
        : 'https://govis.gopizza.kr';
    return NextResponse.redirect(`${host}${path}`);
  }

  return NextResponse.next();
}

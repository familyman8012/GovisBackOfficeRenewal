import { TotalMenu } from '@ComponentFarm/layout/MenuData';

export function getUrlText(urlPath: string) {
  const path = urlPath.split('/')[1].split('?')[0];
  const routeInfo = TotalMenu.find(route => route?.path?.includes(path));
  return routeInfo ? routeInfo.depth1 : null;
}

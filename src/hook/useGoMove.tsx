// hooks/useHandleBack.js
import { useRouter } from 'next/router';
import { queryString } from '@UtilFarm/queryString';

export const useGoMove = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const onMove = (url: string) => {
    router.push(`${url}/${queryString(query)}`);
  };

  const onBack = (depth = -1) => {
    const newPath = pathname.split('/').slice(0, depth).join('/');
    router.push(`${newPath}?${queryString(query)}`);
  };

  return { onMove, onBack };
};

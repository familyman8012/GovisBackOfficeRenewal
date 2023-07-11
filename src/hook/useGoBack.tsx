// hooks/useHandleBack.js
import { useRouter } from 'next/router';

export function useGoBack() {
  const router = useRouter();

  const handleBack = () => {
    if (router.query.from === 'back') {
      router.back();
    } else {
      // 현재 URL에서 /add를 제거하여 기본 경로를 얻습니다.
      const basePath = router.asPath.split('/').slice(0, -1).join('/');
      router.push(basePath);
    }
  };

  return handleBack;
}

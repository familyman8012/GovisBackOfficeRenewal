import {
  ReactElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
} from 'react';
import Cookies from 'js-cookie';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { Global } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';
import { fetchEnvironment } from '@ApiFarm/environment';
import { ServerError } from '@InterfaceFarm/response';
import ConfirmModal from '@ComponentFarm/modules/Modal/ConfirmModal';
import reset from '@ComponentFarm/common';
import Layout from '@ComponentFarm/layout';
import { Goivs2Menu } from '@ComponentFarm/layout/MenuData';
import { EnvStore, authStore } from '@MobxFarm/store';
import { errorHandler } from '@UtilFarm/error-handler';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-loading-skeleton/dist/skeleton.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const urlArr = router.asPath.split('/');
  const currentUrl = `/${urlArr[urlArr.length - 1]?.split('?')[0]}`;
  const host =
    typeof window !== 'undefined' &&
    (window.location.host.includes('dev') ||
      window.location.host.includes('localhost'))
      ? 'https://dev.govis.gopizza.kr'
      : 'https://govis.gopizza.kr';

  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    // 현재 URL이 Goivs2Menu에 없으면 리다이렉트
    if (
      !Goivs2Menu.includes(
        urlArr.length > 2
          ? `/${urlArr[urlArr.length - 2]}${currentUrl}`
          : currentUrl
      ) &&
      currentUrl !== '/'
    ) {
      window.location.href = `${host}${router.asPath}`;
    }
  }, [currentUrl, router.asPath]);

  useIsomorphicLayoutEffect(() => {
    if (!localStorage.getItem('BO_AUTH_TOKEN') && !!Cookies.get('AUTH_DATA')) {
      authStore.login(JSON.parse(Cookies.get('AUTH_DATA') || '{}'));
    }
    if (!!localStorage.getItem('BO_AUTH_TOKEN') && !Cookies.get('AUTH_DATA')) {
      authStore.logOut();
    }

    const saveSessionEnvironment = async () => {
      const environment = await fetchEnvironment();
      sessionStorage.setItem('environment', JSON.stringify(environment));
    };

    if (!sessionStorage.getItem('environment')) {
      saveSessionEnvironment();
    }

    EnvStore.init();
    authStore.init();
  }, []);

  const getLayout =
    Component.getLayout ?? ((page: any) => <Layout>{page}</Layout>);

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            onError: (error: unknown) => {
              const { code, message } = error as ServerError;
              errorHandler(code, message);
            },
            refetchOnWindowFocus: false,
            retry: false,
          },

          mutations: {
            onError: (error: unknown) => {
              const { code, message } = error as ServerError;
              errorHandler(code, message);
            },
          },
        },
      }),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      {getLayout(<Component {...pageProps} />)}
      <ConfirmModal />
      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        position="top-right"
        autoClose={4000}
      />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

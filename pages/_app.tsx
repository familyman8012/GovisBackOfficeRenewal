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
// import 'react-datepicker/dist/react-datepicker.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const currentUrl = `/${router.asPath.split('/')[1].split('?')[0]}`;
  const host =
    typeof window !== 'undefined' &&
    (window.location.host.includes('dev') ||
      window.location.host.includes('localhost'))
      ? 'https://dev.govis.gopizza.kr'
      : 'https://govis.gopizza.kr';

  useIsomorphicLayoutEffect(() => {
    // 현재 URL이 Goivs2Menu에 없으면 리다이렉트 localhost 제외
    const isLocalDev = window.location.host.includes('localhost');

    if (!isLocalDev && !Goivs2Menu.includes(currentUrl) && currentUrl !== '/') {
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

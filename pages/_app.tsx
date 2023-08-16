import { ReactElement, ReactNode, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { Global, ThemeProvider } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';
import { ServerError } from '@InterfaceFarm/response';
import reset from '@ComponentFarm/common';
import { theme } from '@ComponentFarm/theme';
import { errorHandler } from '@UtilFarm/error-handler';
import 'react-datepicker/dist/react-datepicker.css';
import { authStore } from '@MobxFarm/store';
import Layout from '@ComponentFarm/layout';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  useEffect(() => {
    authStore.init();
  }, []);

  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>);

  const queryClient = new QueryClient({
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
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
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

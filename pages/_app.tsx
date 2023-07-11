import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/component/theme";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  Hydrate,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { errorHandler } from "@/util/error-handler";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ServerError } from "@/src/interface/response";

export default function App({ Component, pageProps }: AppProps) {
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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        position="top-right"
        autoClose={4000}
      />
    </QueryClientProvider>
  );
}

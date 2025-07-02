import GlobalStyle from "@/styles/styles";
import { theme } from "@/styles/themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Lacrei Saúde</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

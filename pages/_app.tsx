import "styles/globals.css";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";

import { Provider } from "react-redux";
import ErrorMessage from "src/components/ErrorMessage";
import Footer from "src/components/Footer";
import Loading from "src/components/Loading";
import Top from "src/components/Top";

import { store } from "src/lib/redux/store";
import { themeDark, themeLight } from "src/lib/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={true ? themeDark : themeLight}>
        <CssBaseline />
        <div style={{ width: 1000, margin: "0 auto" }}>
          <Top />
          <main>
            <Container maxWidth="md">
              <Component {...pageProps} />
            </Container>
          </main>
          <Footer />
        </div>
        <ErrorMessage />
        <Loading />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;

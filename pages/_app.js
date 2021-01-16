import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, NoSsr } from "@material-ui/core/";
import theme from "../src/theme";
import { DarkProvider } from "../context/DarkMode";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Ahmad Nuril Firdaus</title>
        <link rel="icon" href="/image/anf1.png" />
        <meta
          name="description"
          content="Resume Ahmad Nuril Firdaus Web Developer"
        />
      </Head>
      <DarkProvider>
        <ThemeProvider theme={theme}>
          <NoSsr>
            <CssBaseline />
            <Component {...pageProps} />
          </NoSsr>
        </ThemeProvider>
      </DarkProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

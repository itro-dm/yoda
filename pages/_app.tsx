import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import theme from '../styles/theme';
import { useMainContainerStyles } from '../styles/common';

const YodaApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const classes = useMainContainerStyles();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      // @ts-ignore
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>YODA APP</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

        <CssBaseline />
        <main className={classes.mainContainer}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
};

export default YodaApp;

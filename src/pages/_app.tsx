import "../../src/index.css";
import React from "react";

import { Provider } from "react-redux";
import { store } from "../store/index";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

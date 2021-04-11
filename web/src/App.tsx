import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { Providers } from "./hooks";

import Routes from "./routes";

import Header from "./components/Header";

import { GlobalStyled } from "./styles/global";

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />

      <Providers>
        <Header />

        <Routes />
      </Providers>
    </BrowserRouter>
  );
};

export default App;

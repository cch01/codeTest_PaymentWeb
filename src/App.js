import React from "react";
import MainBody from "./mainBody";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "@material-ui/core";
import { darkTheme } from "./components/styles/theme";


export default () => {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Provider store={store}>
          <MainBody />
        </Provider>
      </ThemeProvider>
    </div>
  );
}


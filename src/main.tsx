import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { configTheme } from '@/configTheme';
import { ConfigProvider } from 'antd';
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={configTheme}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);

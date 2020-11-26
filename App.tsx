import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import RepositoryList from "./src/screens/RepositoryList";

import store from "./src/redux/index";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <RepositoryList />
    </Provider>
  );
}

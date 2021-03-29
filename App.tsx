import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import RepositoryList from "./src/screens/RepositoryList";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import store from "./src/redux/index";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <RepositoryList />
      </Provider>
    </QueryClientProvider>
  );
}

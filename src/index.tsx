import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryCLinet = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLinet}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

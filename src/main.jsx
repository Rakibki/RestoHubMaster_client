import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routers";
import AuthProvaider from "./providers/AuthProvaider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvaider>
        <RouterProvider router={router} />
      </AuthProvaider>
    </QueryClientProvider>
  </React.StrictMode>
);

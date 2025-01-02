import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/Router.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// create a query client
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </QueryClientProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);

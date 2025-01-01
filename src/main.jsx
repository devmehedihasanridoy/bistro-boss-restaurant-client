import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/Router.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);

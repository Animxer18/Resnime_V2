import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import Layout from "./components/global/Layout.jsx";
import "./style/main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { light } from "./theme";
import "./css/styles.css";
import "./css/chatscope.css";
import "./css/braft.css";
import "./css/datepicker.css";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { extendTheme } from '@chakra-ui/react'

const queryClient = new QueryClient();

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);

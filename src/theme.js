import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "768px",
  md: "960px",
  lg: "1200px",
  xl: "1920px",
})

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const light = extendTheme({
  config,
  breakpoints: breakpoints,
  fonts: {
    body: 'Rubik, sans-serif',
  },
});
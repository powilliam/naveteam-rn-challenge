import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import theme from "../themes/theme";

const ThemeProvider: React.FC = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);

export default ThemeProvider;

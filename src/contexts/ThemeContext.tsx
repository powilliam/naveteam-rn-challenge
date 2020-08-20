import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../themes/theme";

const ThemeContext: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeContext;

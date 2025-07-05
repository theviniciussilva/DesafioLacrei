import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/themes";
import { render } from "@testing-library/react";

export const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

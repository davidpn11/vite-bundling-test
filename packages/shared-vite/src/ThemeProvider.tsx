import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export function MainThemeProvider(props: PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

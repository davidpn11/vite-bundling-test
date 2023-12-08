import { useTheme } from "styled-components";
import { Button, MainThemeProvider } from "vite-shared";

function Comp() {
  const theme = useTheme();
  console.log({ theme });
  return <div>, Theme</div>;
}

export function App() {
  return (
    <MainThemeProvider>
      hello
      <Comp />
      <Button variant="destructive">Hello</Button>
    </MainThemeProvider>
  );
}

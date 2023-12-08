import { Button, MainThemeProvider } from "vite-shared";

export function App() {
  return (
    <MainThemeProvider>
      <div>
        hello
        <Button variant="destructive">Hello</Button>
      </div>
    </MainThemeProvider>
  );
}

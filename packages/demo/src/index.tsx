import ReactDOM from "react-dom";
import { App } from "./App";
const devRoot = document.querySelector("#demo-root");
if (devRoot) {
  ReactDOM.render(<App />, devRoot);
}

import { App } from "./components/App";
import { createRoot } from "react-dom/client";

const rootNode = document.getElementById("root") as HTMLElement;

const root = createRoot(rootNode);

root.render(<App />);

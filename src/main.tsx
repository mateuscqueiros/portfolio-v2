import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// @ts-ignore
import "@fontsource-variable/inter";

createRoot(document.getElementById("root")!).render(<App />);

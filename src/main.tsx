import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// @ts-expect-error
import "@fontsource-variable/inter";
// @ts-expect-error
import "@fontsource/geist-mono";

createRoot(document.getElementById("root")!).render(<App />);

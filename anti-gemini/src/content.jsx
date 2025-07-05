import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mount = document.createElement("div");
mount.id = "react-extension-root";
document.body.appendChild(mount);

const root = createRoot(mount);
root.render(<App />);
import { createRoot } from "react-dom/client";
import WebFont from "webfontloader";
import App from "./App";

window.addEventListener("DOMContentLoaded", (event) => {
  // Load fonts
  WebFont.load({
    google: {
      families: ["Roboto:400,500,700"],
    },
  });

  // Prepare container element
  let container = document.getElementById("mml-starter-project-overlay");
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", "mml-starter-project-overlay");

    const body = document.querySelector("body")!;

    body.prepend(container);
    body.style.marginTop = "42px";
  }

  const root = createRoot(container);
  root.render(<App />);
});

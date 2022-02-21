import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import BubbleSort from "./routes/ALG/BubbleSort";
import IsArray from "./routes/isArray";

const rootElement = document.getElementById("root");
render((
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="BubbleSort" element={<BubbleSort />} />
      <Route path="isArray" element={<IsArray />} />
    </Routes>
  </BrowserRouter>
), rootElement);

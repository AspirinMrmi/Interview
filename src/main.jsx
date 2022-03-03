import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import BubbleSort from "./routes/ALG/BubbleSort";
import IsArray from "./routes/isArray";
import QuickSort from "./routes/ALG/QuickSort";
import BFC from "./routes/BFC"
import DeepClone from "./routes/DeepClone"
import Reduce from "./routes/Array-Function/Reduce"

const rootElement = document.getElementById("root");
render((
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="BubbleSort" element={<BubbleSort />} />
      <Route path="isArray" element={<IsArray />} />
      <Route path="quickSort" element={<QuickSort />} />
      <Route path="bfc" element={<BFC />} />
      <Route path="deepClone" element={<DeepClone />} />
      <Route path="reduce" element={<Reduce />} />
    </Routes>
  </BrowserRouter>
), rootElement);

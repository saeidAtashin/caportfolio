import "./style.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import JDC from "./component/JDC";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="jdc" element={<JDC />} />



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

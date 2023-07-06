import "./style.css";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

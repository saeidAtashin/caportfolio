import React, { Suspense } from "react";
import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import sgLogo from "./images/loading.gif";

const root = ReactDOM.createRoot(document.getElementById("root"));

const loadingMarkup = (
  <>
    <div className="container-small">
      <div className="row align-items-center justify-content-center middle-page">
        <img className="col-3 " src={sgLogo} />
      </div>
    </div>
  </>
);

root.render(
  <React.StrictMode>
    <Suspense fallback={loadingMarkup}>
      <App />
    </Suspense>
  </React.StrictMode>
);

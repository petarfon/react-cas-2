import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);

//Koristimo JSX, a ne HTML

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <h1>Cao svima!</h1>
//     <p>Kako ste?</p>
//   </>

// );

// const prom = <h1>Cao svima!</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<div>{prom}<p>Kako ste?</p></div>);

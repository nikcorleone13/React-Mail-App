import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { EmailDataProvider } from "./contexts/EmailDataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <EmailDataProvider>
        <App /> 
      </EmailDataProvider>
    </Router>
  </React.StrictMode>
);

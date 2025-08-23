import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./contexts/UserContext.jsx";
import "./index.css";
import "./fonts.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

console.log('REACT_APP_CLOUDINARY_CLOUD_NAME=', process.env.CLOUDINARY_CLOUD_NAME);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </React.StrictMode>
);

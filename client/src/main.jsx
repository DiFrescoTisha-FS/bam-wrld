import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./contexts/UserContext.jsx";
import "./index.css";
import "./fonts.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import axios from "axios";

axios.defaults.withCredentials = true;

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  console.error('Clerk publishable key is not set');
} else {
  console.log('Clerk publishable key:', clerkPubKey);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </ClerkProvider>
  </React.StrictMode>
);


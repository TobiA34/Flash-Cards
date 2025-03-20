import React from "react";
import ReactDOM from "react-dom/client"; // <-- Import from 'react-dom/client'
import App from "./App";
import { FlashcardProvider } from "./context/FlashCardContext"; 
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FlashcardProvider>
    <App />
  </FlashcardProvider>
);
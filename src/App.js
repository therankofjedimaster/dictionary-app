import React from "react";
import './index.css';
import Footer from "./Footer.js";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>
          Dictionary 📚
        </h1>
      </header>
      <Dictionary />
      <Footer />
    </div>
  );
}
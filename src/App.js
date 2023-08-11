import React from "react";
import './index.css';
import Footer from "./Footer.js";
import Dictionary from "./Dictionary";
import background from "./images/library.jpg"

export default function App() {
  return (
    <div className="container" style={{ backgroundImage: `url(${background})` }}>
      <header>
        <h1>
          English Dictionary 📚
        </h1>
      </header>
      <Dictionary />
      <Footer />
    </div>
  );
}
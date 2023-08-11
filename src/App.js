import React from "react";
import "./index.css";
import Footer from "./Footer.js";
import Dictionary from "./Dictionary";
import background from "./images/library.jpg";

export default function App() {
  return (
    <>
      <div
        className="bg"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <header>
        <h1>English Dictionary 📚</h1>
      </header>
      <Dictionary />
      <Footer />
    </>
  );
}
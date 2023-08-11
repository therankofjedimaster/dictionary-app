import React from "react";
import "./index.css";

export default function Footer() {
    return (
        <div className="container">
            <footer className="text-white">
                {" "}
                <em>
                    {" "}
                    Open source code by {" "}
                    <a className="text-white"
                        href="https://www.linkedin.com/in/eugenia-zanarini/"
                        target="_blank"
                        rel="noreferrer">
                        Eugenia Zanarini
                    </a>  available at{" "}
                    <a className="text-white"
                        href="https://github.com/therankofjedimaster/dictionary-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>.
                </em>
            </footer>
        </div>
    );
}
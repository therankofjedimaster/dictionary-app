import React from "react";
import "./index.css";

export default function Footer() {
    return (
        <div className="container">
            <footer className="text-white">
                <strong>
                    {" "}
                    <em>
                        {" "}
                        Open source code by {" "}
                        <a
                            href="https://www.linkedin.com/in/eugenia-zanarini/"
                            target="_blank"
                            rel="noreferrer">
                            Eugenia Zanarini
                        </a>  available at{" "}
                        <a
                            href="https://github.com/therankofjedimaster/dictionary-app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>.
                    </em></strong>
            </footer>
        </div>
    );
}
import React from "react";
import "./index.css";

export default function Footer() {
    return (
        <div className="container">
            <footer>
                {" "}
                <em>
                    {" "}
                    Open source code by Eugenia Zanarini available at{" "}
                    <a
                        href="https://github.com/therankofjedimaster/dictionary-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </em>
            </footer>
        </div>
    );
}
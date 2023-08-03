import React from "react";
import "./index.css";
import Meaning from "./Meaning";

export default function Results({ results }) {
    function renderMeanings() {
        if (!results.meanings.length === 0) {
            return <div>No meanings found.</div>;
        }

        return results.meanings.map(function (meaning, index) {
            return (
                <div key={index}>
                    <Meaning meaning={meaning} />
                </div>
            );
        });
    }

    return (
        <div className="meaning">
            <h2>Definition of {results.word}</h2>
            {renderMeanings()}
        </div>
    );
}

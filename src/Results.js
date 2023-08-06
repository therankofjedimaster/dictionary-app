import React from "react";
import "./index.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results({ results }) {
    function renderMeanings() {
        if (results.meanings.length === 0) {
            return <div>No meanings found.</div>;
        }
        return results.meanings.map((meaning, index) => (
            <div key={index}>
                <Meaning meaning={meaning} />
            </div>
        ));
    }

    function renderPhonetics() {
        if (results.phonetics.length === 0) {
            return <div>No phonetics information found.</div>;
        }
        return results.phonetics.map((phonetic, index) => (
            <div key={index}>
                <Phonetic phonetic={phonetic} />
            </div>
        ));
    }

    return (
        <div className="meaning">

            <h2 className="text-center">Definition of {results.word} {renderPhonetics()}</h2>
            {renderMeanings()}
        </div>
    );
}

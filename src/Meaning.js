import React from "react";
import "./index.css";

export default function Meaning(props) {
    return (
        <div className="container">
            <p>{props.meaning.partOfSpeech}</p>
            <p>{props.meaning.partOfSpeech.definition}</p>
            <p>{props.meaning.definitions[0].definition}</p>
            <p><em> {props.meaning.definitions[0].example}</em></p>

        </div>
    );
}
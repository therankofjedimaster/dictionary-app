import React from "react";
import "./index.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    const firstDefinition = props.meaning.definitions[0].definition;
    const firstExample = props.meaning.definitions[0].example;

    return (
        <div className="container shadow-sm">
            <p className="titles"><strong>{props.meaning.partOfSpeech}</strong></p>
            <p>{props.meaning.partOfSpeech.definition}</p>
            <div>
                <p>{firstDefinition}</p>
                <p className="example"><em>{firstExample}</em></p>
            </div>
            <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
        </div>
    );
}

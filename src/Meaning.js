import React from "react";
import "./index.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    const firstDefinition = props.meaning.definitions[0].definition;

    return (
        <div className="container">
            <p><strong>{props.meaning.partOfSpeech}</strong></p>
            <p>{props.meaning.partOfSpeech.definition}</p>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <p><em>{definition.example}</em></p>
                    </div>
                );
            })}
            <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
        </div>
    );
}

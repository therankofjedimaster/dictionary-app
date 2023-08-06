import React from "react";
import "./index.css";

export default function Synonyms(props) {
    if (props.synonyms.length > 0) {
        return (
            <div>
                <strong> <p> Synonyms:</p></strong>
                <ul className="synonyms">
                    {props.synonyms.map(function (synonym, index) {
                        return <li key={index}>{synonym}</li>;
                    })}
                </ul>
            </div>
        );
    } else {
        return null;
    }
}

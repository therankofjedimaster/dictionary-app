import React from "react";
import "./index.css";

export default function Phonetic(props) {
    return (
        <div className="phonetics">
            <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">Listen</a>{" "}
            <em>{props.phonetic.text}</em>
        </div>
    );
}

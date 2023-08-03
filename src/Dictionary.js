import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState({});

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="page-content">
            <div className="dictionary">
                <form className="search" onSubmit={search}>
                    <input type="search" onChange={handleKeywordChange} /> {""}
                    <button className="button">Search!</button>
                </form>
                {""}

                <div className="results">
                    <Results results={results} />
                </div>

            </div>
        </div>



    );
}
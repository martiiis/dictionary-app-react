/** @format */

import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <div className="synonyms">๐ Synonyms:</div>
        <div className="synonyms-words">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>ยท {synonym} </li>;
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

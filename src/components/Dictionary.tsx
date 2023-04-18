import React, { useState } from "react";
import css from "../css/Dictionary.module.scss";
import enWord from "../words/englishWords";
import mnWord from "../words/mongolWords";
import Header from "./Header";
const Dictionary = () => {
  const [enWords, setEnWords] = useState<string>("");

  const num = function (): string {
    return (Math.ceil(Math.random() * 10000) * 1000).toString(32);
  };

  return (
    <div className={css.Dictionary}>
      <Header />
      <div className={css.Section1}>
        <ul>
          {enWord.split("\n").map((el, index) => (
            <li key={el + num()}>
              {index + 1}: {el.toLowerCase()}
            </li>
          ))}
        </ul>
      </div>
      <div className={css.Section2}>
        <ul>
          {mnWord.split("\n").map((el, index) => (
            <li key={el + num()}>
              {index + 1}: {el.toLowerCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dictionary;

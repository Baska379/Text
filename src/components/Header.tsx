import React, { useState, useEffect } from "react";
import css from "../css/Header.module.scss";
import { Link } from "react-router-dom";
// Words
import enWords1 from "../words/englishWords";
import mnWords1 from "../words/mongolWords";
const Header = () => {
  const [enWord1, setenWord1] = useState<string[]>(enWords1.split("\n"));
  const [mnWord1, setmnWord1] = useState<string[]>(mnWords1.split("\n"));
  const [listBoolean, setListBoolean] = useState<boolean>(true);
  const [findWords1, setFindWords] = useState<string[]>([]);
  const search = function (el) {
    el.preventDefault();
    setFindWords([]);
    if (el.target.value.length > 0) {
      setListBoolean(false);
      setFindWords(
        enWord1.map((elem, i) => {
          let index: number = elem.search(el.target.value);
          let index2: number = mnWord1[i].search(el.target.value);
          if (index !== -1 || index2 !== -1) {
            return elem + " - " + mnWord1[i].toLowerCase();
          }
        })
      );
    } else {
      setFindWords([]);
      setListBoolean(true);
    }
  };
  return (
    <div className={css.Header}>
      <div className={css.Button}>
        <Link to={"/"} className={css.game}>
          Game
        </Link>

        <Link to={"/dictionary"} className={css.dictionary}>
          Dictionary
        </Link>
      </div>
      <div className={css.Search}>
        <input
          type="text"
          placeholder="Search here"
          className={css.search__input}
          onChange={search}
        />
        {/* <button className={css.search__button}>Search</button> */}
      </div>
      <div
        className={css.Find}
        style={{ display: listBoolean ? "none" : "block" }}
      >
        <ul>
          {findWords1.map((el, index) => (
            <li key={el + index}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

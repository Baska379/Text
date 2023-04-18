import React, { useEffect, useState } from "react";
import css from "../css/Ask.module.scss";
import { askfindWord } from "../public/check";
interface Type {
  askWord: string;
}
const Ask = (props: Type) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [findWord, setFindWord] = useState<string>("");

  const find = function () {
    setFindWord(askfindWord(props.askWord));
    setVisible(false);
    time();
  };
  const time = function () {
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  };
  return (
    <button className={css.Ask} onClick={find}>
      <span
        className={css.findWord}
        style={{
          opacity: visible ? "0" : "1",
          width: `${findWord.length + 1}vmax`,
        }}
      >
        1. {findWord}
      </span>
      Ask
    </button>
  );
};

export default Ask;

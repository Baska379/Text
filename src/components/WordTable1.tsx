import React, {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
} from "react";
import englishWords from "../words/englishWords";
interface Props {
  addButton: boolean;
  setAddButton: React.Dispatch<React.SetStateAction<boolean>>;
  setTableBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  setSendWord1: React.Dispatch<React.SetStateAction<string>>;
  setfindEn: React.Dispatch<React.SetStateAction<string>>;
  sendWord1: string;
  setAskWord: React.Dispatch<React.SetStateAction<string>>;
}
const WordTable1 = forwardRef((props: Props, ref) => {
  const [word, setWord] = useState<string>("");
  const [saveIndex, setSaveIndex] = useState<number[]>([]);

  const refresh = () => {
    handler();
  };

  useImperativeHandle(ref, () => {
    return {
      table1: handler,
    };
  });
  const handler = () => {
    props.setSendWord1("");
    const enWord = englishWords.split("\n");
    const num: number = enWord.length;
    const rand: number = Math.floor(Math.random() * num);
    const find = saveIndex.indexOf(rand);
    if (find === -1) {
      saveIndex.push(rand);
      setSaveIndex(saveIndex);
      const find = enWord.slice(rand, rand + 1);
      props.setfindEn(find.toString());
      setWord(find.toString());
      props.setAskWord(find.toString());
    } else {
      refresh();
    }
  };

  const setHandler = (el: string) => {
    props.setSendWord1(el);
  };
  const addHandler = function () {
    props.setAddButton(false);
    props.setTableBoolean(true);
  };
  return (
    <div className="word__table">
      <p className="word">
        {word}
        {props.addButton ? (
          <button className="addButton" onClick={addHandler}>
            +
          </button>
        ) : (
          ""
        )}
      </p>
      <input
        type="text"
        value={props.sendWord1}
        onChange={(el) => setHandler(el.target.value)}
      />
    </div>
  );
});

export default WordTable1;

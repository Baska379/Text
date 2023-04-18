import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import englishWords2 from "../words/englishWords2";
interface Props {
  setTableBoolean2: React.Dispatch<React.SetStateAction<boolean>>;
  addButton1: boolean;
  setAddButton1: React.Dispatch<React.SetStateAction<boolean>>;
  setTableBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  setAddButton: React.Dispatch<React.SetStateAction<boolean>>;
  setSendWord2: React.Dispatch<React.SetStateAction<string>>;
  sendWord2: string;
  setfindEn2: React.Dispatch<React.SetStateAction<string>>;
}
const WordTable = forwardRef((props: Props, ref) => {
  const [word, setWord] = useState<string>("");
  const [saveIndex, setSaveIndex] = useState<number[]>([]);
  const refresh = () => {
    handler();
  };
  useImperativeHandle(ref, () => {
    return {
      table2: handler,
    };
  });
  useEffect(() => {
    handler();
  }, []);
  const handler = () => {
    props.setSendWord2("");
    const enWord = englishWords2.split("\n");
    const num: number = enWord.length;
    const rand: number = Math.floor(Math.random() * num);
    const find = saveIndex.indexOf(rand);
    if (find === -1) {
      saveIndex.push(rand);
      setSaveIndex(saveIndex);
      const find = enWord.slice(rand, rand + 1);
      props.setfindEn2(find.toString());
      setWord(find.toString());
    } else {
      refresh();
    }
  };

  const setHandler = (el: string) => {
    props.setSendWord2(el);
  };
  function addHandler() {
    props.setTableBoolean2(true);
    props.setAddButton1(false);
  }
  function minusHandler() {
    props.setTableBoolean(false);
    props.setAddButton(true);
  }
  return (
    <div className="word__table2">
      <p className="word">
        {word}
        <button className="minusButton" onClick={minusHandler}>
          -
        </button>
        {props.addButton1 ? (
          <button className="addButton" onClick={addHandler}>
            +
          </button>
        ) : (
          ""
        )}
      </p>
      <input
        type="text"
        value={props.sendWord2}
        onChange={(el) => setHandler(el.target.value)}
      />
    </div>
  );
});

export default WordTable;

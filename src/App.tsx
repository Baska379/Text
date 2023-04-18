import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Ask from "./components/Ask";
import { GiCheckMark } from "react-icons/gi";
import { VscError } from "react-icons/vsc";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
import WordTable1 from "./components/WordTable1";
import WordTable2 from "./components/WordTable2";
import WordTable3 from "./components/WordTable3";
import {
  askfindWord,
  assistent,
  table1Check,
  table2Check,
  table3Check,
} from "./public/check";

function App() {
  const [tableNumber, setTableNumber] = useState<number>(1);
  const [tableNumber2, setTableNumber2] = useState<number>(2);
  const [tableNumber3, setTableNumber3] = useState<number>(3);
  const [askWord, setAskWord] = useState<string>("");
  const [tableBoolean, setTableBoolean] = useState<boolean>(false);
  const [tableBoolean2, setTableBoolean2] = useState<boolean>(false);
  const [addButton, setAddButton] = useState<boolean>(true);
  const [addButton1, setAddButton1] = useState<boolean>(true);
  const [sendWord1, setSendWord1] = useState<string>("");
  const [sendWord2, setSendWord2] = useState<string>("");
  const [sendWord3, setSendWord3] = useState<string>("");
  const [findEn, setfindEn] = useState<string>(null);
  const [findEn2, setfindEn2] = useState<string>(null);
  const [findEn3, setfindEn3] = useState<string>(null);
  const [count, setCount] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [nextBoolean, setNextBoolean] = useState<boolean>(false);
  const [checkBoolean, setcheckBoolean] = useState<boolean>(false);
  const [list__word, setList__Word] = useState<string[]>([]);
  const wordTableRef = useRef(null);
  const wordTable2Ref = useRef(null);
  const wordTable3Ref = useRef(null);
  useEffect(() => {
    handler();
  }, []);

  const handler = () => {
    wordTableRef.current?.table1();
    wordTable2Ref.current?.table2();
    wordTable3Ref.current?.table3();
    setcheckBoolean(false);
    setNextBoolean(true);
  };
  const sendCheck = () => {
    if (tableBoolean === false && tableBoolean2 === false) {
      const result: string = table1Check(sendWord1, findEn);
      if (result === "true") {
        const find = assistent(findEn, tableNumber).toString();
        list__word.push(findEn + ": - " + find);
        setCount(count + 1);
        setSuccess(true);
        time();
        setNextBoolean(false);
        setError(false);
        setList__Word(list__word);
        setcheckBoolean(true);
      } else {
        errorFun();
      }
    }
    sendCheck2();
  };
  const sendCheck2 = () => {
    if (tableBoolean === true && tableBoolean2 === false) {
      const result: string = table1Check(sendWord1, findEn);
      const result2: string = table2Check(sendWord2, findEn2);
      if (result === "true" && result2 === "true") {
        const find = assistent(findEn, tableNumber).toString();
        const find2 = assistent(findEn2, tableNumber2).toString();
        list__word.push(findEn + ": - " + find);
        list__word.push(findEn2 + ": - " + find2);
        setCount(count + 2);
        setSuccess(true);
        setError(false);
        time();
        setNextBoolean(false);
        setList__Word(list__word);
        setcheckBoolean(true);
      } else {
        errorFun();
      }
    }
    if (tableBoolean2 === true && tableBoolean === true) {
      const result: string = table1Check(sendWord1, findEn);
      const result2: string = table2Check(sendWord2, findEn2);
      const result3: string = table3Check(sendWord3, findEn3);
      if (result === "true" && result2 === "true" && result3 === "true") {
        const find = assistent(findEn, tableNumber).toString();
        const find2 = assistent(findEn2, tableNumber2).toString();
        const find3 = assistent(findEn3, tableNumber3).toString();
        list__word.push(findEn + ": - " + find);
        list__word.push(findEn2 + ": - " + find2);
        list__word.push(findEn3 + ": - " + find3);
        setCount(count + 3);
        setSuccess(true);
        setError(false);
        time();
        setNextBoolean(false);
        setList__Word(list__word);
        setcheckBoolean(true);
      } else {
        errorFun();
      }
    }
    if (tableBoolean2 === true && tableBoolean === false) {
      const result: string = table1Check(sendWord1, findEn);
      const result3: string = table3Check(sendWord3, findEn3);
      if (result === "true" && result3 === "true") {
        const find = assistent(findEn, tableNumber).toString();
        const find3 = assistent(findEn3, tableNumber3).toString();
        list__word.push(findEn + ": - " + find);
        list__word.push(findEn3 + ": - " + find3);
        setCount(count + 2);
        setSuccess(true);
        setError(false);
        time();
        setNextBoolean(false);
        setList__Word(list__word);
        setcheckBoolean(true);
      } else {
        errorFun();
      }
    }
  };
  const errorFun = () => {
    setSuccess(false);
    setError(true);
    const find = assistent(findEn, tableNumber);

    console.log(find);
    if (tableBoolean === true) {
      const find2 = assistent(findEn2, tableNumber2);

      console.log(find2);
    }
    if (tableBoolean2 === true) {
      const find3 = assistent(findEn3, tableNumber3);

      console.log(find3);
    }
    time();
  };
  const time = () => {
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 2000);
  };

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>

      <div className="word__input">
        <WordTable1
          ref={wordTableRef}
          addButton={addButton}
          setAddButton={setAddButton}
          setTableBoolean={setTableBoolean}
          setSendWord1={setSendWord1}
          sendWord1={sendWord1}
          setfindEn={setfindEn}
          setAskWord={setAskWord}
        />
        {tableBoolean ? (
          <WordTable2
            ref={wordTable2Ref}
            setTableBoolean2={setTableBoolean2}
            addButton1={addButton1}
            setAddButton1={setAddButton1}
            setTableBoolean={setTableBoolean}
            setAddButton={setAddButton}
            setSendWord2={setSendWord2}
            sendWord2={sendWord2}
            setfindEn2={setfindEn2}
          />
        ) : (
          ""
        )}
        {tableBoolean2 ? (
          <WordTable3
            ref={wordTable3Ref}
            setTableBoolean2={setTableBoolean2}
            setAddButton1={setAddButton1}
            setSendWord3={setSendWord3}
            sendWord3={sendWord3}
            setfindEn3={setfindEn3}
          />
        ) : (
          ""
        )}
      </div>

      <p className="count">{count}</p>
      <p className="icon">
        <GiCheckMark
          className="success"
          style={{ opacity: success ? "1" : "0" }}
        />
        <VscError className="error" style={{ opacity: error ? "1" : "0" }} />
      </p>
      <div className="allButton">
        <button onClick={handler} className="next" disabled={nextBoolean}>
          next
        </button>
        <button className="check" onClick={sendCheck} disabled={checkBoolean}>
          check
        </button>
        <Ask askWord={askWord} />
      </div>
      <div className="none"></div>
      <div className="list">
        {list__word.map((el, index) => {
          const word: string[] = el.split("-");
          return (
            <p key={el + index.toString()} className="word__list">
              <span className="en">{word[0].toLowerCase()}</span>
              <span className="mn">{word[1].toLowerCase()}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;

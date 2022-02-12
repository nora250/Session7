import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [imcomplateTodos, setImcomplateTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [complateTodos, setComplateTodos] = useState(["うううう"]);
  return (
    <React.Fragment>
      <div className="input-area">
        <input placeholder="ToDOを入力" />
        <button>追加</button>
      </div>
      <div className="imcomplate-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {imcomplateTodos.map((todo) => {
            return (
              //map関数内でdivなどを使用するときはkeyを付与すること
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complate-area">
        <p className="title">完了したToDo</p>
        <ul>
          {complateTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

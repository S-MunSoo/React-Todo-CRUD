import React, { useState } from "react";

const TodoAdd = ({ todoAddHandler }) => {
  //투두 입력 초기값 data
  const [userInput, setUserInput] = useState({ date: "", content: "" });

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  return (
    <div>
      <input type="date" name="date" onChange={userInputHandler} />
      <input type="content" name="content" onChange={userInputHandler} />
      <button onClick={() => todoAddHandler(userInput)}>추가</button>
    </div>
  );
};

export default TodoAdd;

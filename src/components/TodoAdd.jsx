import React, { useState } from "react";

const TodoAdd = ({ todoID, todoData, setTodoData }) => {
  //투두 입력 초기값 data
  const [userInput, setUserInput] = useState({ date: "", content: "" });

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  // 투두 추가 실행
  const todoAddHandler = (userInput) => {
    setTodoData([
      ...todoData,
      {
        id: todoID.current,
        date: userInput.date,
        content: userInput.content,
        checked: false,
      },
    ]);
    todoID.current += 1;
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

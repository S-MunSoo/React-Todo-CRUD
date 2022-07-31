import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";

const TodoList = () => {
  const todoID = useRef(2);
  const todoList = [
    {
      id: 1,
      date: "2022-07-30",
      content: "공부하기",
      checked: false,
    },
  ];

  const [todoData, setTodoData] = useState(todoList);
  // 투두제거
  const todoRemoveHandler = (id) => {
    setTodoData(todoData.filter((itemData) => itemData.id !== id));
  };

  // 투두 체크(완료 )표시
  const todoCheckHandler = (id) => {
    setTodoData(
      todoData.map((itemData) =>
        itemData.id === id
          ? { ...itemData, checked: !itemData.checked }
          : itemData
      )
    );
  };
  return (
    <div>
      <h2>문수's Todo</h2>
      <TodoAdd todoID={todoID} todoData={todoData} setTodoData={setTodoData} />
      {todoData.map((itemData) => (
        <TodoItem
          itemData={itemData}
          key={itemData.id}
          todoRemoveHandler={todoRemoveHandler}
          todoCheckHandler={todoCheckHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;

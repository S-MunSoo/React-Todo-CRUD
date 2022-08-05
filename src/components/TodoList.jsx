import React, { useRef } from "react";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";
import { todoReducer } from "../reudcer/todoReducer";
import { useReducer } from "react";
let initialization = [
  {
    id: 1,
    date: "2020-08-03",
    content: "코딩하기",
    checked: false,
  },
];
const TodoList = () => {
  // TodoAdd 추가 버튼을 위해 새로운 id 값 생성 필요 use Ref 이용
  const todoID = useRef(2);
  const [todoData, dispatch] = useReducer(todoReducer, initialization);

  const todoAddHandler = (userInput) => {
    dispatch({ type: "ADD", data: { ...userInput, id: todoID.current } });
    todoID.current += 1;
  };

  const todoRemoveHandler = (id) => {
    dispatch({ type: "REMOVE", data: { id } });
  };
  const todoCheckedHandler = (id) => {
    dispatch({ type: "CHECK", data: { id } });
  };

  return (
    <div>
      <h2>문수's Todo</h2>
      <TodoAdd todoAddHandler={todoAddHandler} />
      {todoData.map((itemData) => (
        <TodoItem
          itemData={itemData}
          key={itemData.id}
          todoRemoveHandler={todoRemoveHandler}
          todoCheckHandler={todoCheckedHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;

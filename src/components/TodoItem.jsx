import React from "react";

const TodoItem = ({ itemData, todoRemoveHandler, todoCheckHandler }) => {
  // itemData todolist 에서 가지고온 초기값
  const { id, date, content, cheked } = itemData;
  return (
    <div>
      <>
        <p>{date}</p>
        <p>{content}</p>
        <button onClick={() => todoCheckHandler(id)}>
          {cheked ? <>미완료</> : <>완료</>}
        </button>
        <button onClick={() => todoRemoveHandler(id)}>삭제</button>
      </>
    </div>
  );
};

export default TodoItem;

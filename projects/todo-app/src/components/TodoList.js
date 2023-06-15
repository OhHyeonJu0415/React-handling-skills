import React from "react";
import "../styles/TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;

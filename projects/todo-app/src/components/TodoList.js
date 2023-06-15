import React from "react";
import "../styles/TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {/* 배열 변환 후 렌더링 */}
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;

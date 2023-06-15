import React from "react";
import "../styles/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">To do list</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;

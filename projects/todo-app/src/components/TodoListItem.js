import React from "react";
import {
  MdCheckCircle,
  MdRemoveCircleOutline,
  MdOutlineCircle,
} from "react-icons/md";
import "../styles/TodoListItem.scss";

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdOutlineCircle />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;

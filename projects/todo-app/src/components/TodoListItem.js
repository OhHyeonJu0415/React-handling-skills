import React from "react";
import {
  MdCheckCircle,
  MdRemoveCircleOutline,
  MdOutlineCircle,
} from "react-icons/md";
import cn from "classnames";
import "../styles/TodoListItem.scss";

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })}>
        {checked ? <MdCheckCircle /> : <MdOutlineCircle />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;

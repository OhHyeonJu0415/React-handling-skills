import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1, //고유 id
      text: "리액트의 기초 알아보기", //sodyd
      checked: true, //완료 여부
    },
    {
      id: 2,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 3,
      text: "리액트의 기초 알아보기",
      checked: false,
    },
  ]);

  //ref를 사용하여 변수(고윳값으로 사용될 id) 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      //추가할 객체
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      //객체 추가하기 (불변성 유지하기)
      setTodos(todos.concat(todo));

      //nextId 1씩 추가하기
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoList todos={todos} onRemove={onRemove} />
      <TodoInsert onInsert={onInsert} />
    </TodoTemplate>
  );
};

export default App;

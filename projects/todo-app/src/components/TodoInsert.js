import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "../styles/TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  // 함수를 한번만 만들고 재사용하기 : useCallback
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      //submit 이벤트의 새로고침 방지
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;

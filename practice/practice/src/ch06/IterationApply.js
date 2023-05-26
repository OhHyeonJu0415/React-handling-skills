import React, { useState } from "react";

const IterationApply = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  //텍스트 입력 상태
  const [inputText, setInputText] = useState("");

  //새로운 항목을 추가할 때 사용할 id
  const [nextId, setNextId] = useState(5);

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => handleRemove(name.id)}>
      {name.text}
    </li>
  ));

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    const temp = names.concat({ id: nextId, text: inputText }); //불변성 유지를 위한 concat 함수 사용
    setNextId(nextId + 1); //다음 항목을 위한 id+1
    setNames(temp); //names 값 업데이트
    setInputText("");
  };

  const handleRemove = (removeId) => {
    const temp = names.filter((name) => name.id !== removeId); //불변성 유지를 위한 filter 함수 사용
    setNames(temp); //names 값 업데이트
  };

  return (
    <>
      <input
        type="text"
        placeholder="입력해주세요"
        value={inputText}
        onChange={handleChange}
      />
      <button onClick={handleClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationApply;

import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중 : ");

  if (numbers.length === 0) return 0;

  //배열을 순서대로 순회하며 콜백함수의 실행 값을 누적하여 하나의 값으로 변환
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseMemo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    //버튼을 누르면 list 배열의 값이 바뀐다
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  //list 배열의 값이 바뀌면 함수 실행, 바뀌지 않으면 이전 값 재사용
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default UseMemo;

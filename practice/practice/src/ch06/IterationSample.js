import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map(
    (name, index) => <li key={index}>{name}</li> //DOM 요소를 직접 작성하거나 컴포넌트를 사용해도 된다
  );

  return <ul>{nameList}</ul>;
};

export default IterationSample;

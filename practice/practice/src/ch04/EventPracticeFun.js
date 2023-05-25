import React, { useState } from "react";

//함수형 컴포넌트
const EventPracticeFun = () => {
  const [form, setForm] = useState({
    //객체 형식으로 선언
    username: "",
    message: "",
  });

  const { username, message } = form; //비구조화 할당으로 값 추출

  const onChange = (e) => {
    const nextform = {
      ...form, //기존 form 내용 복사한 뒤
      [e.target.name]: e.target.value, //원하는 값 덮어 씌우기
    };

    setForm(nextform); //값 업데이트
  };

  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticeFun;

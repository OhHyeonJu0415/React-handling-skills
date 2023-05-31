import React, { useState, useEffect } from "react";

const InfoUseState = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log(name);

    return () => {
      //호출시 업데이트되기 직전 값 보여줌
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={handleName} />
        <input type="text" value={nickname} onChange={handleNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b>
          {name}
        </div>
        <div>
          <b>닉네임 : </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoUseState;

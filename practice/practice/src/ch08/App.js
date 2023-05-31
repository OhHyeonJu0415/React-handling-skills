import React, { useState } from "react";
import UseState from "./UseState"; //ch08.1 useState
import InfoUseState from "./InfoUseState"; //ch08.1.1 state 여러번 사용하기
import UseEffect from "./UseEffect"; //ch08.2 useEffect

const App = () => {
  //   return <UseState />; //ch08.1
  //   return <InfoUseState />; //ch08.1.1
  //   return <UseEffect />; //ch08.2

  //ch08.2.3 뒷정리하기
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <UseEffect />}
    </div>
  );
};

export default App;

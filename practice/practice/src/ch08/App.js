import React, { useState } from "react";
import UseState from "./UseState"; //ch08.1 useState
import InfoUseState from "./InfoUseState"; //ch08.1.1 state 여러번 사용하기
import UseEffect from "./UseEffect"; //ch08.2 useEffect
import UseReducer from "./UseReducer"; //ch08.3 useReducer
import InfoUseReducer from "./InfoUseReducer"; //ch08.3.2 useReducer 인풋상태 관리하기
import UseMemo from "./UseMemo"; //ch08.4 useMemo
import UseCallback from "./UseCallback"; //ch08.5 useCallback
import UseRef from "./UseRef"; //ch08.6 useRef
import InfoCustomHook from "./InfoCustomHook"; //ch08.7 커스텀 hooks 만들기

const App = () => {
  //   return <UseState />; //ch08.1
  //   return <InfoUseState />; //ch08.1.1
  //   return <UseEffect />; //ch08.2

  //ch08.2.3 뒷정리하기
  //   const [visible, setVisible] = useState(false);
  //   return (
  //     <div>
  //       <button
  //         onClick={() => {
  //           setVisible(!visible);
  //         }}
  //       >
  //         {visible ? "숨기기" : "보이기"}
  //       </button>
  //       <hr />
  //       {visible && <UseEffect />}
  //     </div>
  //   );

  //   return <UseReducer />; //ch08.3
  //   return <InfoUseReducer />; //ch08.3.2
  //   return <UseMemo />; //ch08.4
  //   return <UseCallback />; //ch08.5
  //   return <UseRef />; //ch08.6
  return <InfoCustomHook />; //ch08.7
};

export default App;

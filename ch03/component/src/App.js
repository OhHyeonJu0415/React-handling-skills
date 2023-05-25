import React from "react";
import MyComponent from "./MyComponent"; //ch.03.3 : props
import Counter from "./Counter"; //ch.03.4.1 : 클래스형 컴포넌트 state
import Say from "./Say"; //ch.03.4.2 : 함수형 컴포넌트 useState

const App = () => {
  return (
    //ch.03.3 : props
    // <MyComponent name="바보" favoriteNumber={3}>
    //   현주
    // </MyComponent>

    //ch.03.4.1 : 클래스형 컴포넌트 state
    // <Counter />

    //ch.03.4.2 : 함수형 컴포넌트 useState
    <Say />
  );
};

export default App;

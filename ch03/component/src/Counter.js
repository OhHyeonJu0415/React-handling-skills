import React, { Component } from "react";

// 클래스형 컴포넌트에서 state 사용하기

class Counter extends Component {
  //constrctor 메서드에서 state 설정
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     //state 초깃값 설정
  //     number: 0,
  //     fixNumber: 0,
  //   };
  // }

  //constrctor 메서드를 사용하지 않고 state 설정
  state = {
    number: 0,
    fixNumber: 0,
  };

  render() {
    const { number, fixNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixNumber}</h2>
        <button
          onClick={() => {
            // 숫자 1씩 올리기
            // this.setState({ number: number + 1 });

            //숫자 2씩 올리기 : 객체 대신 함수 인자 전달하기
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   }
            // });

            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));

            //콜백함수 사용하기
            this.setState({ number: number + 1 }, () => {
              console.log("호출!");
              console.log(this.state);
            });
          }}
        >
          + 1{" "}
        </button>
      </div>
    );
  }
}

export default Counter;

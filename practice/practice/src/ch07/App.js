import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample"; //ch07.3.1~2
import ErrorBoundary from "./ErrorBoundary"; //ch07.3.3

//ch07.3
function getRandomColor() {
  //state의 color 값 랜덤으로 생성
  //16777215를 hex로 표현하면 ffffff이므로 000000~ffffff 값 반환
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class App extends Component {
  state = { color: "#000" };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>랜덤 색상</button>

        <ErrorBoundary>
          {/* props 넘겨주기 */}
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;

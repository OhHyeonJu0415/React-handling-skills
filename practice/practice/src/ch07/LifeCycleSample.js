import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; //ref를 설정할 부분

  constructor(props) {
    //mount-1
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //mount-2, update-1
    console.log("getDerivedStateFromProps");

    //부모에게서 받은 color 값을 state에 동기화 시킴
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    } else return null;
  }

  componentDidMount() {
    //mount-4
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //update-2
    console.log("shouldComponentUpdate", nextProps, nextState);

    //숫자의 마지막 자리가 4면 리렌더링 하지 않느다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    //unmount
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //update-4
    console.log("getSnapshotBeforeUpdate");

    //DOM에 변화가 일어나기 직전의 색상을 snapshot으로 반환 -> componentDidUpdate에서 조회
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //update-5
    console.log("componentDidUpdate", prevProps, prevState);

    if (snapshot) {
      //DOM 변화가 일어나기 전 색상을 조회
      console.log("업데이트 되기 직전 색상 : ", snapshot);
    }
  }

  render() {
    //mount-3, update-3

    console.log("render");

    const style = {
      color: this.props.color,
    };
    return (
      <>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </>
    );
  }
}

export default LifeCycleSample;

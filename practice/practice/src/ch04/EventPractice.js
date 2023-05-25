import React, { Component } from "react";

//클래스형 컴포넌트
class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  //생성자 메서드에서 메서드 바인딩 하기
  //   constructor(props) {
  //     super(props);
  //     //this를 컴포넌트 자신으로 가리키기 위한 바인딩
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  //   //onChange 이벤트 전달 함수
  //   handleChange(e) {
  //     this.setState({
  //       message: e.target.value,
  //     });
  //   }

  //   //onClick 이벤트 전달 함수
  //   handleClick() {
  //     alert(this.state.message);
  //     this.setState({ message: "" });
  //   }

  //간단하게 메서드바인딩하기
  handleChange = (e) => {
    this.setState({
      //input이 1개일 때
      //   message: e.target.value,

      //input이 여러개일 때
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + " : " + this.state.message);
    this.setState({ message: "", username: "" });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          //state에 input 값 담기
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;

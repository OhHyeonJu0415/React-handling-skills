import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { error: false };

  componentDidCatch(error, info) {
    //에러 발생시 호출
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) {
      return <div>에러 발생!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import React, { Component } from "react";

class CreateRefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <>
        <input ref={this.input} />
      </>
    );
  }
}

export default CreateRefSample;

import React, { Component } from "react";
// import ValidationSample from "./ValidationSample"; //ch05.1
// import CreateRefSample from "./CreateRefSample"; //ch05.2.2
import ScrollBox from "./ScrollBox"; //ch05.3

class App extends Component {
  render() {
    // return <ValidationSample />; ch05.1
    // return <CreateRefSample />; //ch05.2.2
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import SassComponent from "./SassComponent"; //ch09.2 Sass 사용하기
import CSSModule from "./CSSModule"; //ch09.3 CSS Module
import StyledComponent from "./StyledComponent"; //ch09.4 styeld-component

class App extends Component {
  render() {
    return (
      <div>
        {/* <SassComponent /> ch09.2 */}
        {/* <CSSModule /> ch09.3 */}
        <StyledComponent />
      </div>
    );
  }
}

export default App;

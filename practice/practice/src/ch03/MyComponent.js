import React, { Component } from "react";
import PropTypes from "prop-types";

// 함수형 컴포넌트
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <>
//       <div>내 이름은 {name}다!!</div>
//       <div>Children 값은 {children}</div>
//       <div>제가 좋아하는 숫자는 {favoriteNumber}입니다</div>
//     </>
//   );
// };

// 클래스형 컴포넌트
class MyComponent extends Component {
  //클래스형 컴포넌트에서는 클래스 내부에 지정도 가능하고 외부에 지정도 가능하다
  // static defaultProps = {
  //   name: "기본 이름",
  // };

  // static propTypes = {
  //   name: PropTypes.string,
  //   favoriteNumber: PropTypes.number.isRequired,
  // };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <>
        <div>내 이름은 {name}다!!</div>
        <div>Children 값은 {children}</div>
        <div>제가 좋아하는 숫자는 {favoriteNumber}입니다</div>
      </>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;

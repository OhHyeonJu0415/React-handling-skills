# ch03_컴포넌트


### :pencil2: 단어 정리
1. self-closing tag : 태그를 선언하면서 동시에 닫을 수 있는 태그
    - `<input/>`



---

### :pencil: 문법 정리
1. defaultProps : props 값을 따로 지정하지 않았을 때 보여 줄 기본값 설정
  ```javascript
  const MyComponent = (props) => {
    return <div>내 이름은 {props.name}다!!</div>;
  };

  MyComponent.defaultProps = {
    name: "기본 이름",
  };
  ```

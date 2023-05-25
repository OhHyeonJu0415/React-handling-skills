## 목차
ch03. [컴포넌트](#ch03_컴포넌트)


ch04. [이벤트 핸들링](#ch04_이벤트-핸들링)


---
# ch03_컴포넌트


### :pencil2: 단어 정리
1. self-closing tag : 태그를 선언하면서 동시에 닫을 수 있는 태그
    - `<input/>`
    - `<br/>`
    

### :pencil: 문법 정리
1. 비구조화 할당
    - 객체
        ```javascript
        const { name, favoriteNumber, children } = props;
        ```
    - 배열
        ```javascript
        const array =[1, 2];
        const [one, two] = array;
        ```


2. 태그 사이의 내용을 보여주는 children : MyComponent 내부에서 보여주려면 `{props.children}`을 사용한다.
    ```javascript
    return <MyComponent name="바보">현주</MyComponent>;
    ```
    
3. defaultProps : props 값을 따로 지정하지 않았을 때 보여 줄 기본값 설정
      ```javascript
      const MyComponent = (props) => {
        return <div>내 이름은 {props.name}다!!</div>;
      };

      MyComponent.defaultProps = {
        name: "기본 이름",
      };
      ```

4. propTypes를 통한 props 검증 : props 타입 지정, 필수 요소 등
    ```javascript
    import PropTypes from "prop-types";
    ```
    ```javascript
    MyComponent.propTypes = {
      name: PropTypes.string,
      favoriteNumber: PropTypes.number.isRequired,
    };
    ```
    
5. 클래스형 컴포넌트에서 state 설정하기
    - constrctor 메서드에서 state 설정
     ```javascript
      constructor(props) {
          super(props);
          this.state = {
            //state 초깃값 설정
            number: 0,
            fixNumber: 0,
      };
    }
    ```
    
    - constrctor 메서드를 사용하지 않고 state 설정
    ```javascript
     state = {
        number: 0,
        fixNumber: 0,
    };
    ```
    
6. 함수형 컴포넌트에서 useState 사용하기 : 세터(Setter) 함수 사용, 배열 비구조화 할당 사용
    ```javascript
    const [message, setMessage] = useState("");
    const onClickEnter = () => setMessage("안녕하세요!");
    ```
    


### :bulb: 마무리
__props와 state__


1. 공통점 : 컴포넌트에서 사용, 렌더링할 데이터를 담고 있다.
2. 차이점 
    - props : 부모 컴포넌트가 설정, 자식 컴포넌트는 읽기 전용으로만 사용 가능
    - state : 컴포넌트 자체적으로 지닌 값이기 때문에 컴포넌트 내부에서 값 업데이트 가능


:arrow_forward: props가 항상 고정적인 것은 아니다. props를 전달 받은 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하여 props를 유동적으로 사용할 수 있다.

---


# ch04_이벤트 핸들링


### :pencil2: 이벤트 주의사항
1. 이벤트 이름은 카멜표기법으로 작성한다.
    - `onclick` -> `onClick`
    - `onkeyup` -> `onKeyUp`
    
2. 이벤트에 전달하는 것은 자바스크립트 코드가 아닌 함수 형태의 값이다.
    - 함수를 바로 만들어 전달해도 되고, 렌더링 부분 외부에 미리 만들어서 사용해도 된다.
    
3. DOM 요소에만 이벤트를 설정할 수 있다.
    - `div`, `span`, `button`, `input`, `form` 등의 DOM 요소에만 이벤트를 설정할 수 있다.
    - 아래와 같이 직접 만든 컴포넌트에 이벤트 값을 설정하면 이름이 onClick인 props를 전달한다. 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수 있다.
        ```javascript
        <MyComponent onClick={doSomething}/>
        ...
        <div onClick={this.props.onClick}></div>
        ```

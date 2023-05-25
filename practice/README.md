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


### :ballot_box_with_check: 이벤트 주의사항
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

### :pencil2: 단어 정리
1. 합성이벤트(SyntheticEvent) : 이벤트 핸들링에 사용되는 e 혹은 event 객체
    - 웹 브라우저의 네이티브 이벤트를 감싸는 객체 -> 모든 브라우저에서 이벤트를 동일하게 처리하기 위함
    - 순수JS에서 HTML 이벤트를 다룰 때와 똑같이 사용
    

### :pencil: 문법 정리
1. Property Initializer Syntax를 사용한 메서드 작성
    - 클래스형 컴포넌트에서 메서드 바인딩은 생성자 메서드에서 하는 것이 정석이다.
        ```javascript
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }

        //onChange 이벤트 전달 함수
        handleChange(e) {
            this.setState({ message: e.target.value}); 
        }
        ```
    - 바벨의 transform-class-properties 문법을 사용하면 화살표 함수 형태로 간단하게 메서드를 정의할 수 있다.
        ```javascript
        handleChange = (e) => {
            this.setState({message: e.target.value});
        };
        ```
2. input 여러개 다루기
    - 객체 안에서 key를 [  ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용된다.
    - onChange 이벤트 핸들러에서 e.target.name은 해당 input의 name을 가르키기 때문에 이 값을 사용하여 state를 설정한다.
        ```javascript
          handleChange = (e) => {
              [e.target.name]: e.target.value,
            });
          };
        ```

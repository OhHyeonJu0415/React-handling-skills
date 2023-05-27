## 목차
ch03. [컴포넌트](#ch03_컴포넌트)


ch04. [이벤트 핸들링](#ch04_이벤트-핸들링)


ch05. [ref](#ch05_ref)


ch06. [컴포넌트 반복](#ch06_컴포넌트-반복)


ch07. [컴포넌트의 라이프사이클 메서드](#ch07_컴포넌트의-라이프사이클-메서드)

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
2. 클래스형 컴포넌트에서 input 여러개 다루기
    - 객체 안에서 key를 [  ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용된다.
    - onChange 이벤트 핸들러에서 e.target.name은 해당 input의 name을 가르키기 때문에 이 값을 사용하여 state를 설정한다.
        ```javascript
          handleChange = (e) => {
              [e.target.name]: e.target.value,
            });
          };
        ```
        
3. 함수형 컴포넌트에서 input 여러개 다루기
    - input의 개수가 많아지면 e.tartget.name 활용하기
    ```javascript
    const [form, setForm] = useState({
        //객체 형식으로 선언
        username: "",
        message: "",
    });

    const { username, message } = form; //비구조화 할당으로 값 추출

    const onChange = (e) => {
        const nextform = {
              ...form, //기존 form 내용 복사한 뒤
              [e.target.name]: e.target.value, //원하는 값 덮어 씌우기
        };

        setForm(nextform); //값 업데이트
    };
    


### :bulb: 마무리
1. 이벤트 핸들링은 순수JS, jQuery에서 다루는 이벤트와 비슷하다.
2. 클래스형 컴포넌트로 할 수 있는 작업은 대부분 함수형 컴포넌트에서도 가능하다.
3. 함수형 컴포넌트에서 useState, form 객체를 이용한 input 상태 관리는 __useReducer__ 와 __커스텀 Hooks__ 를 사용하면 더 편하게 작업 가능하다.

---
# ch05_ref
클래스형 컴포넌트에서 ref 사용하기

### :pencil2: 단어 정리
1. ref : 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법
    - 리액트 컴포넌트에 id를 사용하게 되면 컴포넌트를 여러 번 사용할 때 유일해야 하는 id 값이 중복되는 문제가 발생한다.
    - ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문에 위 문제가 발생하지 않는다.
    - __DOM을 직접적으로 건드려야 할 때 사용한다.__
        * 특정 input에 포커스 주기
        * 스크롤 박스 조작하기
        * canvas 요소에 그림 그리기
    
    

### :pencil: 문법 정리
1. ref를 사용하는 두 가지 방법
    1) 콜백 함수를 통한 ref 설정 : 가장 기본적인 방법
        - `this.input`은 `input` 요소의 DOM을 가리킨다.
        - DOM 타입과 관계없이 `this.superman = ref`처럼 마음대로 이름을 지정할 수 있다.
            ```javascript
            <input ref={(ref) => {this.input=ref}} />
            ```

    2) createRef를 통한 ref 설정 : 리액트 내장 함수 createRef 사용
        - 컴포넌트 내부에서 멤버 변수로 `React.createRef()` 담기
        - 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주기
        - `this.input.current`로 조회 가능
            ```javascript
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
            ```
            
2. 컴포넌트에 ref 달기
    - 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용하기 위함
    - 내부 메서드 및 멤버 변수에도 접근 가능
        ```javascript
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        ```
         ```javascript
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        ```
    - 주의사항 : `onClick={this.scrollBox.scrollBottom}`
        * 문법상 틀린 것은 아니지만, 컴포넌트가 처음 렌더링될 때 `this.scrollBox` 값이 _undefine_ 이므로 `this.scrollBox.scrollToBotttom` 값을 읽을 때 오류 발생!
        * 화살표 함수로 새로운 함수를 만들고 내부에서 `this.scrollBox.scrollToBottom` 메서드를 실행하면 버튼을 누를 때 이미 한번 렌더링을 해서 `this.scrollBox`를 설정했기 때문에 오류가 나지 않는다 
        ( _practice/src/ch05/ScrollBox.js 참고_ )
        

### :bulb: 마무리
1. 컴포넌트 내부에서 DOM에 직접 접근할 때 사용한다.
    - ref를 사용하지 않아도 구현할 수 있는지 충분히 고려하기!
2. 서로 다른 컴포넌트끼리 데이터 교류할 때 사용하지 않는다.
    - 앱 규모가 커지면 구조가 꼬이고 유지 보수가 불가능하다.
    - 컴포넌트끼리 데이터를 교류할땐 부모 <-> 자식 흐름으로 해야 한다. -> 리덕스 혹은 Context API를 사용한다.

---
# ch06_컴포넌트 반복
반복적인 내용을 효율적으로 보여 주고 관리하는 방법



### :pencil2: 단어 정리
1. key
    - 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변화가 있는지 감지하려고 사용한다.
    - key가 없다면 Virtual DOM을 비교하는 과정이 순차적으로 일어나지만, key가 있다면 이 값을 사용하여 빠르게 알아낸다.
    - 언제나 __유일한__ 값이어야 한다.
        -  데이터가 가진 고윳값을 key 값으로 설정
        -  고윳값이 없을 때는 콜백 함수의 인수인 index를 활용 (index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못한다.)
    
    

### :pencil: 문법 정리
1. `map()` 함수 : 기존 배열로 새로운 배열을 만드는 함수
    ```javascript
    arr.map(callback,[thisArg])
    ```
    - callback : 새로운 배열 요소 생성 함수
        - currentValue : 현재 처리하고 있는 요소
        - index : 현재 처리하고 있는 요소의 index 값
        - array : 현재 처리하고 있는 요소의 원본 배열
    - thisArg(옵션) : callback 함수 내부에서 사용할 this 레퍼런스
    
    
    ```javascript
    const numbers = [1, 2, 3];
    const result = numbers.map(num => num * num); //1,4,9
    ```
    
2. `filter()` 함수 : 배열의 특정 항목을 지우는 함수
    - 함수의 인자에 분류하고 싶은 조건을 반환하는 함수 넣기
        ```javascript
       const numbers = [1, 2, 3];
       cosnt biggerThanTwo = numbers.filter(number => number > 2); //3
        ```
    
3. 데이터 배열을 컴포넌트 배열로 변환하기
    - 문자열로 된 배열을 선언한다.
    - 배열 값을 사용하여 `<li>...<li>` JSX 코드로 새로운 배열을 만든다.
        ```javascript
        const names = ["눈사람", "얼음", "눈", "바람"];
        const nameList = names.map((name, index) => <li key={index}>{name}</li>); //DOM 요소를 직접 작성하거나 컴포넌트를 사용해도 된다

        return <ul>{nameList}</ul>;
        ```
4. 동적인 배열 렌더링하기
    1. 초기 상태 설정
        - 데이터 배열
        - 텍스트 입력
        - 새로운 항목을 추가할 때 사용할 고유 id
            ```javascript
            const [names, setNames] = useState([
                { id: 1, text: "눈사람" },
                { id: 2, text: "얼음" },
             ]);

             const [inputText, setInputText] = useState("");  //텍스트 입력 상태
             const [nextId, setNextId] = useState(3); //새로운 항목을 추가할 때 사용할 id
            ```
    
    2. 데이터 추가 기능
        - 기존 배열 자체를 변경하는 push 함수가 아닌 새로운 배열을 만드는 concat 함수 사용
        - __불변성 유지__ : 상태를 업데이트할 때 기존 상태를 그대로 두면서 새로운 값을 상태로 설정
        - 불변성이 유지 되어야 리액트 컴포넌트 성능 최적화 가능
            ```javascript
            const handleClick = () => {
                const temp = names.concat({ id: nextId, text: inputText }); //불변성 유지를 위한 concat 함수 사용
                setNextId(nextId + 1); //다음 항목을 위한 id+1
                setNames(temp); //names 값 업데이트
                setInputText("");
            };
            ```
    
    3. 데이터 제거 기능
        - 불변성을 유지하면서 배열의 특정 항목을 지우는 배열 내장 함수 filter 사용
            ```javascript
            const handleRemove = (removeId) => {
                const temp = names.filter((name) => name.id !== removeId); //불변성 유지를 위한 filter 함수 사용
                setNames(temp); //names 값 업데이트
            };
            ```

        

### :bulb: 마무리
1. 컴포넌트 배열을 렌더링할 때는 key 값을 언제나 유일한 값으로 설정한다.
2. 상태 안에서 배열을 변형할 때는 배열에 직접 접근해서 수정하지 않는다.
3. concat, filter 등의 배열 내장 함수를 이용해 새로운 배열을 만들고 이를 새로운 상태로 설정해준다. -> 불변성 유지



---
# ch07_컴포넌트의 라이프사이클 메서드 

        

### :mag: 개념 정리
1. __라이프사이클(수명 주기)__
    - 모든 리액트 컴포넌트에 존재한다.
    - 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비 과정 ~ 페이지에서 사라질 때 끝난다.
    - 클래스형 컴포넌트에서만 사용 가능하다.
    - 함수형 컴포넌트에서는 비슷한 기능을 Hooks를 통해 작업할 수 있다.
    - 마운트(mount) / 업데이트(update) / 언마운트(unmount) 카테고리로 나뉜다.
        
2. __마운트(mount)__
    - DOM이 생성되고 웹 브라우저 상에 나타나는 것
    - 메서드 호출 순서
        1. `constructor(props)`
            - 컴포넌트를 새로 만들때마다 호출되는 클래스 생성자 메서드
            - 초기 state를 정할 수 있다.
        2. `getDerivedStateFromProps(nextProps, prevState)`
            - props로 받아온 값을 state에 넣을 때 사용하는 메서드
            - 컴포넌트가 마운트, 업데이트 시작하기 전에 호출된다.
        3. `render()`
            - UI를 렌더링 하는 메서드
            - `this.props`와 `this.state`에 접근할 수 있고, 리액트 요소를 반환한다.
            - `null`이나 `false` 값을 반환하면 아무것도 보여주지 않는다.
            - DOM 접근, state 변화를 줄 때 접근할 수 없다. -> `compoenetDidMount`에서 처리할 것!
        4. `componentDidMount()`
            - 컴포넌트가 첫 렌더링을 마친 후 호출하는 메서드
            - JS 라이브러리나 프레임워크 함수를 호출하거나 `setTimeout`, `setInterval`, 네트워크 요청 같은 비동기 작업을 처리한다.

3. __업데이트(update)__
    - 컴포넌트는 다음과 같은 네 가지 경우에 업데이트 한다.
        - 부모 컴포넌트에서 넘겨주는 props가 바뀔 때
        - 컴포넌트 자신의 state가 setState를 통해 바뀔 때
        - 부모 컴포넌트가 리렌더링 될 때 : props나 state가 바뀌지 않아도 자식 컴포넌트 또한 리렌더링 된다.
        - `this.forceUpdate`로 강제로 렌더링을 트리거할 때
    - 메서드 호출 순서
        1. `getDerivedStateFromProps(nextProps, prevState)`
            - props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용한다.
        2. `shouldComponentUpdate(nextProps, nextState)`
            - 컴포넌트가 리렌더링을 할지 말지 결정하는 메서드
            - 반드시 true(실행) 혹은 false(작업 중지)를 반환해야 한다.
            - 특정 함수에서 `this.forceUpdate()` 함수를 호출하면 이 과정을 생략하고 `render()`를 호출한다.
            - 현재 값 접근 : `this.props`, `this.state`
            - 새로 설정될 값 접근 : `nextProps`, `nextState`
            - 리렌더링 방지로 프로젝트 성능 최적화 가능
        3. `render()`
            - 컴포넌트 리렌더링
        4. `getSnapshotBeforeUpdate(prevProps, prevState)`
            - 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출되는 메서드
            - 반환 값은 `componentDidUpdate`에서 세 번째 파라미터인 `snapshot` 값으로 전달하고 업데이트 직전 값을 참고할 때 활용 (_예) 스크롤바 위치 유지_)
        5. `componentDidUpdate(prevProps, prevState, snapshot)`
            - 리렌더링을 완료한 후 호출되는 메서드 
            - DOM 관련 처리가 가능하다.
            - 이전 값 접근 : `prevProps`, `prevState`
            - `getSnapshotBeforeUpdate`에서 반환한 값이 있다면 snapshot으로 값을 전달 받을 수 있다.

4. __언마운트(unmount)__
    - 컴포넌트를 DOM에서 제거하는 것
    - 메서드 호출
        1. componentWillUnmount
            - 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출되는 메서드
            - `componentDidMount`에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야한다.

        




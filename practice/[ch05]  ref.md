# ch05_ref : DOM에 이름 달기
클래스형 컴포넌트에서 ref 사용하기

<br/>

### :pencil2: 단어 정리
1. ref : 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법
   - 리액트 컴포넌트에 _id_ 를 사용하게 되면 컴포넌트를 여러 번 사용할 때 유일해야 하는 _id_ 값이 중복되는 문제가 발생한다.
   - ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문에 위 문제가 발생하지 않는다.
   - __DOM을 직접적으로 건드려야 할 때 사용한다.__
     * 특정 input에 포커스 주기
     * 스크롤 박스 조작하기
     * canvas 요소에 그림 그리기
    
    
<br/>

### :pencil: 문법 정리
#### 1. ref를 사용하는 두 가지 방법
1. 콜백 함수를 통한 ref 설정 : 가장 기본적인 방법
   - `this.input`은 `input` 요소의 DOM을 가리킨다.
   - DOM 타입과 관계없이 `this.superman = ref`처럼 마음대로 이름을 지정할 수 있다.
     
     ```javascript
     <input ref={(ref) => {this.input=ref}} />
     ```

<br/>


2. `createRef`를 통한 ref 설정 : 리액트 내장 함수 `createRef` 사용
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
            
<br/>


#### 2. 컴포넌트에 ref 달기
- 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용하기 위함
- 내부 메서드 및 멤버 변수에도 접근 가능
  
  ```javascript
  <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
  (...)
  <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
  ```
- 주의사항 : `onClick={this.scrollBox.scrollBottom}`
  * 문법상 틀린 것은 아니지만, 컴포넌트가 처음 렌더링될 때 `this.scrollBox` 값이 _undefine_ 이므로 `this.scrollBox.scrollToBotttom` 값을 읽을 때 오류 발생!
  * 화살표 함수로 새로운 함수를 만들고 내부에서 `this.scrollBox.scrollToBottom` 메서드를 실행하면 버튼을 누를 때 이미 한번 렌더링을 해서 `this.scrollBox`를 설정했기 때문에 오류가 나지 않는다. <br/> 
    ( _practice/src/ch05/ScrollBox.js 참고_ )
        
  
<br/>


### :bulb: 마무리
1. 컴포넌트 내부에서 DOM에 직접 접근할 때 사용한다.
    - ref를 사용하지 않아도 구현할 수 있는지 충분히 고려하기!
2. 서로 다른 컴포넌트끼리 데이터 교류할 때 사용하지 않는다.
    - 앱 규모가 커지면 구조가 꼬이고 유지 보수가 불가능하다.
    - 컴포넌트끼리 데이터를 교류할땐 부모 <-> 자식 흐름으로 해야 한다. <br/>
      ▶️ 리덕스 혹은 Context API 사용하기

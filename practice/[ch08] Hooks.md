# ch08_Hooks
useState, useEffect 등의 기능을 제공하여 기존 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해준다.

<br/>

### :mag: 개념 정리
#### 1. `useState`
  - 가장 기본적인 Hook
  - 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
  - 상태 설정 함수에 파라미터를 넣어서 호출하면 전달받은 파라미터 값으로 바뀌고 컴포넌트가 리렌더링 된다.
    * 파라미터에 함수 `funcName`을 넣으면 컴포넌트가 처음 렌더링될 때만 실행한다.
    * 파라미터에 함수 `funcName()`을 넣으면 컴포넌트가 리렌더링될 때마다 실행한다.
  - 하나의 상태 값만 관리 가능하다.

<br/>

#### 2. `useEffect`
  - 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정하는 Hook
  - 클래스형 컴포넌트의 `componentDidMount`, `componentDidUpdate`를 합친 형태다.
  - 기본적으로 렌더링 되고 난 직후마다 실행되고 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행이 조건 변경된다.

<br/>
    
#### 3. `useReducer`
  - `useState`보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 할 때 사용하는 Hook
  - 현재 상태, 업데이트에 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수다.
  - 새로운 상태를 만들 때 반드시 __불변성__ 을 유지할 것!
  - 리덕스 액션 객체와는 다르게 _tpye_ 필드가 필수가 아니다.
  - 액션은 객체뿐만 아니라 문자열, 숫자 등 어떤 값도 사용 가능하다.
  - 컴포넌트 __업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것이__ 가장 큰 장점이다.<br/>
    (_리듀서(reduecer)의 자세한 개념은 ch17 참고_)

<br/>

#### 4. `useMemo`
  - 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다.
  - 렌더링하는 과정에서 특정 값이 바뀔때만 연산을 수행하고, 원하는 값이 바뀌지 않았으면 이전 연산 결과값을 다시 사용한다.<br/>
     _ex) 숫자들의 평균을 보여주는 컴포넌트에서 인풋 내용이 수정될 때도 평균값 함수가 호출된다. 인풋 내용이 바뀔때는 평균값을 다시 계산할 필요가 없기 때문에 렌더링할 때마다 계산하는 것은 낭비다._
  - 숫자, 문자열, 객체처럼 일반 값을 재사용할 때 사용한다.

<br/>

#### 5. `useCallback`
  - 이벤트 핸들러 함수를 필요할 때만 생성할 수 있는 Hook
  - 주로 렌더링 성능 최적화에 사용한다.
  - `useMemo`로 함수를 반환하는 상황에서 편리하게 사용 가능하다.
  - 함수 재사용시 사용한다.

<br/>

#### 6. `useRef`
  - 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해주는 Hook
  - ref를 설정하면 `useRef`를 통해 만든 객체 안의 _current_ 값이 실제 엘리먼트를 가리킨다.

<br/>

#### 7. 커스텀 Hooks 만들기
  - 컴포넌트에서 비슷한 기능을 공유할 경우 로직을 따로 분리해 재사용할 수 있다.<br/>
    (_practice/ch08/useInputs.js와 practice/ch08/InfoCustomHook.js 참고_)



<br/>

### :pencil: 문법 정리
#### 1. `useState`
```javascript
const [value, setValue] = useState(0);
```
  - 함수의 파라미터 값 : 상태의 기본값
  - 반환된 배열의 첫 번째 원소(_value_) : 상태 값
  - 반환된 배열의 두 번째 원소(_setValue_) : 상태 설정 함수


<br/>
        
#### 2. `useEffect`
```javascript
useEffect(() => {
  console.log("렌더링 완료");
});
```
##### 2.1. 마운트될 때만 실행하기
  - 화면에 맨 처음 렌더링될 때만 실행, 업데이트 때는 실행하지 않음
  - 두 번째 파라미터로 비어 있는 배열 넣어주기
    
    ```javascript
    useEffect(() => {
      console.log("렌더링 완료");
    }, []);
    ```
<br/>
        
##### 2.2. 특정 값이 업데이트될 때만 실행하기
  - 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값 넣기
  - useState를 통해 관리하고 있는 상태나 props로 전달받은 값을 넣어도 된다.
    
    ```javascript
    useEffect(() => {
      console.log("렌더링 완료");
    }, [name]);
    ```
<br/>
    
##### 2.3. 뒷정리하기 : 언마운트되기 전이나 업데이트되기 직전에 작업 수행하기
  - 컴포넌트가 나타날 때 콘솔에 "effect"가 나타난다.
  - 컴포넌트가 사라질 때 "cleanup"이 나타난다.
  - 뒷정리 함수가 호출될 때는 업데이트되기 직전의 값을 보여준다.
  - 언마운트될 때만 뒷정리 함수 호출하기 : 두 번째 파라미터 값에 빈 배열 넣기
  
    ```javascript
    useEffect(() => {
        console.log("effect");
        console.log(name);

        return () => {
            //호출시 업데이트되기 직전 값 보여줌
            console.log("cleanup");
            console.log(name);
        };
    }, [name]);
    ```
          
<br/>

#### 3. `useReducer`
##### 3.1. 새로운 상태 반환하기
- _state_, _action_ 사용하기

  ```javascript
  function reducer(state, action) {
    //action.type 값에 따라 다른 작업 수행
    switch (action.type) {
      case "INCREMENT":
        return { value: state.value + 1 }; //불변성을 지키면서 업데이트한 새로운 상태 반환
      case "DECREMENT":
        return { value: state.value - 1 };
      default: //아무것도 해당되지 않을 때 기존 상태 반환
        return state;
    }
  }
  ``` 
<br/>
           
##### 3.2. useReducer 사용하기
  - useReducer의 첫 번째 파라미터에는 리듀서 함수를 넣고, 두 번재 파라미터에는 해당 리듀서의 기본값 설정
  - state : 현재 가리키고 있는 상태
  - dispatch : `dispatch(action)` 형태로 리듀서 함수 호출
  
    ```javascript
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    
    <p> 현재 카운터 값은 <b>{state.value}</b>입니다. </p>
    
    <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
    ``` 
<br/>
           
##### 3.3. 여러 개의 인풋 상태 관리하기
  - 클래스형 컴포넌트에서 `input` 태그에 name 값을 할당하고 `e.target.name`을 참조하여 `setState`를 해준 것과 유사한 방법
  - 이벤트 객체가 지니고 있는 `e.target` 값 자체를 액션 값으로 사용하기
  
    ```javascript
    function reducer(state, action) {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    ```
    ```javascript
    const [state, dispatch] = useReducer(reducer, {
      name: "",
      nickname: "",
    });

    const { name, nickname } = state;

    const handleChange = (e) => {
      dispatch(e.target);
    };
    ```
    ```javascript
    //state 값에 접근 할 때 state.name, name 둘 다 가능하다
    <input name="name" value={state.name} onChange={handleChange} /> 
    <input name="nickname" value={nickname} onChange={handleChange} />
    ```
 
<br/>
           
#### 4. `useMemo`
  - 첫 번째 파라미터 : 어떻게 연산할지 정의하는 함수
  - 두 번재 파라미터 : 배열 안에 넣은 값이 바뀌면 등록했던 함수 호출, 값이 바뀌지 않으면 이전 값 재사용
  - list 배열의 내용이 바뀔 때만 함수가 호출된다.
  
    ```javascript
    const avg = useMemo(() => getAverage(list), [list]);
    ```

<br/>
        
#### 5. `useCallback`
  - 첫 번째 파라미터 : 생성하고 싶은 함수
  - 두 번째 파라미터 : 어떤 값이 바뀌었을 때 함수를 새로 생성하는지 명시할 배열
  - 두 번째 파라미터가 빈 배열일 때는 컴포넌트가 처음 렌더링 될 때만 함수를 생성한다.
  
    ```javascript
    const onInsert = useCallback(() => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    }, [number, list]); //number,list 값이 바뀌었을때만 함수 생성
    ```

<br/>
        
#### 6. `useRef`
  - ref를 설정하면 `useRef`를 통해 만든 객체 안의 _current_ 값이 실제 엘리먼트를 가리킨다.
  
    ```javascript
    const inputEl = useRef(null); //지역 변수에 담기
    ```
    ```javascript
    const onInsert = useCallback(() => {
    (...)
      inputEl.current.focus(); //current로 접근
    }, []);
    ```
    ```javascript
    <input value={number} onChange={onChange} ref={inputEl} /> //ref 설정
    ```
    
  - 컴포넌트 로컬 변수를 사용할 때도 활용가능 (ref 안의 값이 바뀌어도 컴포넌트가 렌더링 되지 않는다.)
    ```javascript
    const RefSample = () => {
      const id = useRef(1);
      const setId = (n) => { id.current = n; }
      const printId = () => { console.log(id.current); }
      return ( ... )
    }
    ```
 
 
<br/>
       

### :bulb: 마무리
1. Hooks 패턴을 사용하면 클래스형 컴포넌트 대부분의 기능을 구현할 수 있다.
2. 리액트 매뉴얼에서는 함수형 컴포넌트 Hooks 사용을 권장한다.<br/>
   ▶️ 함수형 컴포넌트 사용을 첫 번째 옵션으로 두고, 꼭 필요한 상황에서만 클래스형 컴포넌트로 구현하기


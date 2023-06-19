# To do List
일정 관리 웹 어플리케이션 만들기



## 1. 디자인하기

<table>
 <tr>
  <th>Main</th>
  <th>Color</th>
 </tr>
 <tr>
  <td rowspan="3"><img width="100%" src="https://github.com/OhHyeonJu0415/React-handling-skills/assets/71424881/f1a38022-ce84-4370-acee-36f599bdc977"/></td>
  <td><img width="100%" src="https://github.com/OhHyeonJu0415/React-handling-skills/assets/71424881/525642a7-1b0b-4a09-9145-69be0cb89704"/></td>
 </tr>
 <tr>
  <th>text</th>
 </tr>
 <tr>
  <td><img width="50%" src="https://github.com/OhHyeonJu0415/React-handling-skills/assets/71424881/c5e43b95-227a-45b4-8701-59541f2ac7a3"/></td>
 </tr>
</table>



---

## 2. UI 구성하기

<table>
 <tr>
    <th>화면</th>
    <th>컴포넌트</th>
    <th>용도</th>
  </tr>
  <tr>
    <td rowspan="4"><img width="100%" src="https://github.com/OhHyeonJu0415/React-handling-skills/assets/71424881/93c4a636-d5a4-4cd6-b162-db382fb7d601"/></td>
    <td><h5>TodoTemplate<h5/></td>
    <td>- 화면 가운데 정렬 및 타이틀 표시<br>- children 내부 JSX를 props로 받아와 렌더링</td>
  </tr>
  <tr>
     <td><h5>TodoInsert<h5/></td>
     <td>- 새로운 항목 입력 및 추가<br>- state를 통해 인풋 상태 관리</td>
  </tr>
  <tr>
     <td><h5>TodoListItem<h5/></td>
     <td>- 각 할 일 항목에 대한 정보 표시<br>- todo 객체를 props로 받아와 상태에 따른 UI 렌더링</td>
  </tr>
  <tr>
     <td><h5>TodoList<h5/></td>
     <td>- todos 배열을 props로 받아옴<br>- map을 사용해 여러 개의 TodoListItem 컴포넌트로 변환하여 렌더링</td>
  </tr>
</table>

---

## 3. 기능 구현하기

#### 1. todos 상태 사용하기 (App -> TodoList -> TodoListItem)
   * 일정 항목들은 APP 컴포넌트에서 관리
   * App -> TodoList : _props_ 로 전달
   * TodoList -> TodoListItem : `map` 함수 활용 _([참고사항 1번](#참고사항))_
       ```javascript
     {/* 배열 변환 후 렌더링 */}
       {todos.map((todo) => (
         <TodoListItem todo={todo} key={todo.id} />
       ))}
       ```
   * TodoListItem : 상태에 따른 조건부 렌더링
      ```javascript
      const { text, checked } = todo;
      ...
      <div className={cn("checkbox", { checked })}>
        {checked ? <MdCheckCircle /> : <MdOutlineCircle />}
        <div className="text">{text}</div>
      </div>
      ```


#### 2. 항목 추가 기능
   1. TodoInsert value 상태 관리하기 : text 값 변경 감지하기
   2. todos 배열에 새 객체 추가하기
      * 고유 id 값을 `useRef`로 관리 _([참고사항 3번](#참고사항))_
      * 객체 추가 함수 `onInsert`를 TodoInsert 컴포넌트의 props로 설정하기
         ```javascript
         const onInsert = useCallback(
           (text) => {
             //추가할 객체
             const todo = {
               id: nextId.current,
               text,
               checked: false,
             };
       
             //객체 추가하기 (불변성 유지하기)
             setTodos(todos.concat(todo));
       
             //nextId 1씩 추가하기
             nextId.current += 1;
           },
           [todos]
         );
         ```
   3. TodoInsert에서 onSubmit 이벤트 설정하기 _([참고사항 4번](#참고사항))_
      * submit 할 때 현재 value 값으로 객체 추가 함수 호출하기
      * `e.preventDefault()`으로 submit의 새로고침 방지하기
         ```javascript
          const onSubmit = useCallback(
            (e) => {
              onInsert(value);
              setValue("");  //value 값 초기화
        
              //submit 이벤트의 새로고침 방지
              e.preventDefault();
            },
            [onInsert, value]
          );
         ```


#### 3. 지우기 기능
   1. todos 배열에서 id로 항목 지우기 : `onRemove` 함수에서 `filter` 함수를 사용하여 같은 id를 가진 항목 지우기 _([참고사항 5번](#참고사항))_
   2. TodoListItem에서 삭제 함수 호출하기
      * App -> TodoList -> TodoListItem으로 `onRemove` 전달하기
      * 삭제 버튼 클릭시 `onRemove` 함수 호출하기


#### 4. 수정 기능
   1. onToggle 기능 구현하기 : `map` 활용 _([참고사항 6번](#참고사항))_
      ```javascript
      const onToggle = useCallback(
        (id) => {
          setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
          );
        },
        [todos]
      );
      ```
   2. TodoList -> TodoListItem 으로 `onToggle` 함수 전달하기
   3. checkbox 클릭시 완료 여부를 변경할 `onToggle` 함수 실행하기

---

## 4. 컴포넌트 성능 최적화

#### 1. 성능 모니터링
   1. 많은 데이터 렌더링하기
      - `usestate`의 기본값에 함수를 넣어 데이터 2500개 자동 생성하기
      - `createBulkTodos()`라고 작성하면 리렌더링될 때마다 함수가 호출되지만, 아래처럼 파라미터 형태로 넣어주면 처음 렌더링될 때만 함수가 실행된다.
        ```javascript
        function createBulkTodos() {
          const array = [];
          for (let i = 1; i <= 2500; i++) {
            array.push({
              id: i,
              text: `할 일 ${i}`,
              checked: false,
            });
          }
        
          return array;
        }

        (...)
        const [todos, setTodos] = useState(createBulkTodos);
        ```
        
   2. 성능 모니터링 : 개발자 도구의 Performance 탭에서 측정

      <img width="50%" src="https://github.com/OhHyeonJu0415/React-handling-skills/assets/71424881/5bc2ad7c-7309-48e0-bcb9-3c3f84c8d489"/>

   3. 느려지는 원인 분석
      1. '할 일 1' 항목 체크시 App 컴포넌트의 state 변경
      2. App 컴포넌트 리렌더링
      3. 자식 컴포넌트인 TodoList 컴포넌트도 리렌더링
      4. '할 일 1' 항목은 리렌더링 되는게 맞지만 '할 일 2~2500'까지 리렌더링 되면서 느려짐 => 성능 저하!


---

## 참고사항
1. 여러 종류의 값을 전달해야 하는 경우는 객체를 통째로 전달해야 성능 최적화 시 편리하다. <br>
   _ex) TodoList에서 TodoListItem로 props 전달하기_
2. props로 전달해야 할 함수를 만들 때는 컴포넌트 성능을 아끼기 위해 `useCallback`으로 함수 감싸는 것을 습관화 할 것!
3. 값이 화면에 보이지도 않고, 값의 변경에 따라 컴포넌트 리렌더링이 필요 없을 땐 `ref`를 사용한다.
   _ex) todos 배열의 고유 id 값을 ref로 관리하기_
4. 버튼 클릭 이벤트가 아니라 `form`과 `submit` 이벤트를 사용하는 이유는 클릭 뿐만 아니라 `Enter`로도 항목을 추가하게 하기 위해서다.
5. 리액트 컴포넌트에서 배열의 불변성을 지키면서 배열의 원소를 제거할 때는 배열 내장 함수 `filter`를 사용한다.
6. 불변성을 유지하면서 특정 배열 원소를 업데이트할 때는 배열 내장 함수 `map`을 사용한다.

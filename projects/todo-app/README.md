# To do List
일정 관리 웹 어플리케이션 만들기



## 1. 디자인하기
<img src="https://img.shields.io/badge/adobexd-FF61F6?style=for-the-badge&logo=adobexd&logoColor=white">

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


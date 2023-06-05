import React from "react";
import styled, { css } from "styled-components";
// 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우
// css를 불러와야 한다.

//styled-component 유틸 함수 사용하기
const sizes = {
  desktop: 1024,
  tablet: 768,
};

//위 size 객체에 다라 자동으로 media 쿼리 함수를 만들어준다
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

const Box = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  /* 기본적으로는 가로 크기 1024px에 가운데 정렬을 하고
  가로 크기가 작아짐에 따라 크기를 줄이고
  768px 미만이 되면 꽉 채운다 */

  /* 미디어쿼리 사용하기 */
  /* @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  } */

  /* 유틸 함수 사용하기 */
  ${media.desktop`width:768px`}
  ${media.tablet`width:100%`}
`;

// & 문자를 사용하여 Sass처럼 자기 자신 선택 가능
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}; // inverted 값이 true일 때 특정 스타일 부여
  & + button {
    //형제 선택자
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;

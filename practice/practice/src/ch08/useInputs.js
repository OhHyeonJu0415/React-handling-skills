import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initial) {
  const [state, dispatch] = useReducer(reducer, initial);

  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

const App = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>count = {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </>
  );
};

export default App;

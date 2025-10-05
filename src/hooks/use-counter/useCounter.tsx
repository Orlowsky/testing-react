import React from "react";
import { UseCounterProps } from "./useCounter.types";

export const useCounter = ({ initialCount = 0 }: UseCounterProps) => {
  const [count, setCount] = React.useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("should initialize count with default value", () => {
    const { result } = renderHook(() => useCounter({}));
    expect(result.current.count).toBe(0);
  });
  test("should initialize count with given initialCount", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }));
    expect(result.current.count).toBe(10);
  });
  test("should increment the count", () => {
    const { result } = renderHook(() => useCounter({}));
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test("should decrement the count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 5 }));
    act(() => result.current.decrement());
    expect(result.current.count).toBe(4);
  });
});

// trzeba dodać zmiane stanu nalezy użyć act() z react testing library

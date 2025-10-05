import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe('useCounter', () => {
    it('should initialize count with default value', () => {
       const { result } = renderHook(() => useCounter({}));
         expect(result.current.count).toBe(0);
    });
    test('should initialize count with given initialCount', () => {
        const { result } = renderHook(() => useCounter({ initialCount: 10 }));
        expect(result.current.count).toBe(10);
    })

})
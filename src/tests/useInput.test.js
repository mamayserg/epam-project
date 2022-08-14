import { renderHook, act } from "@testing-library/react-hooks";
import { useInput } from "../hooks/use-input";

describe("useInputHook", () => {
  it("renders empty useInputHook", () => {
    const {
      result: { current },
    } = renderHook(() => useInput());
    const [initialValue] = current;
    expect(initialValue.value).toBeUndefined();
  });

  it("renders useInputHook with change values", async () => {
    const firstStepValue = "first value input";
    const secondStepValue = "second value input";
    const thirdStepValue = "third value input";

    const { result } = renderHook(() => useInput(firstStepValue));
    const [initialValue] = result.current;
    expect(initialValue.value).toEqual(firstStepValue);

    act(() => initialValue.onChange({ target: { value: secondStepValue } }));

    const [secondValue, defaultState] = result.current;
    expect(secondValue.value).toEqual(secondStepValue);

    act(() => defaultState(thirdStepValue));
    const [thirdValue] = result.current;
    expect(thirdValue.value).toEqual(thirdStepValue);
  });

  it("renders useInputHook with remove value", async () => {
    const value = "test value";

    const { result } = renderHook(() => useInput(value));
    const [initialValue, defaultState] = result.current;
    expect(initialValue.value).toEqual(value);

    act(() => defaultState(null));

    const [nextInitialValue] = result.current;
    expect(nextInitialValue.value).toBeNull();
  });
});

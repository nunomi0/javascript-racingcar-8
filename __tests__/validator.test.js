import { validateCarNames, validateTryCount, MAX_CAR_NAME_LENGTH } from "../src/validator.js";

describe("자동차 이름 유효성 검사", () => {
  test("이름이 비어있으면 에러를 발생시킨다", () => {
    expect(() => validateCarNames(["", "pobi"])).toThrow(
      "[ERROR] 이름에 공백이 포함되어 있습니다."
    );
  });

  test(`이름이 ${MAX_CAR_NAME_LENGTH}자를 초과하면 에러를 발생시킨다`, () => {
    const overLengthName = "a".repeat(MAX_CAR_NAME_LENGTH + 1);
    expect(() => validateCarNames([overLengthName, "jun"])).toThrow(
      `[ERROR] 자동차 이름은 ${MAX_CAR_NAME_LENGTH}자 이하만 가능합니다.`
    );
  });

  test("모든 이름이 조건을 만족하면 통과한다", () => {
    expect(() => validateCarNames(["pobi", "jun", "woni"])).not.toThrow();
  });
});

describe("시도 횟수 유효성 검사", () => {
  test("숫자가 아닌 값을 입력하면 에러를 발생시킨다", () => {
    expect(() => validateTryCount("abc")).toThrow(
      "[ERROR] 시도 횟수는 숫자여야 합니다."
    );
  });

  test("소수 값을 입력하면 에러를 발생시킨다", () => {
    expect(() => validateTryCount("3.5")).toThrow(
      "[ERROR] 시도 횟수는 정수여야 합니다."
    );
  });

  test(`0 이하의 값을 입력하면 에러를 발생시킨다`, () => {
    expect(() => validateTryCount("0")).toThrow(
      `[ERROR] 시도 횟수는 0보다 커야 합니다.`
    );
    expect(() => validateTryCount("-2")).toThrow(
      `[ERROR] 시도 횟수는 0보다 커야 합니다.`
    );
  });

  test(`0보다 큰 양의 정수를 입력하면 통과한다`, () => {
    expect(() => validateTryCount("5")).not.toThrow();
  });
});
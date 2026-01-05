import { parseCarNames } from "../src/Validator.js";

describe("Validator", () => {
  test("parseCarNames가 정상 입력된다.", () => {
    const names = parseCarNames("pobi,woni,jun");
    expect(names).toEqual(["pobi", "woni", "jun"]);
  });

  test("자동차 이름이 5자를 초과한다.", () => {
    expect(() => parseCarNames("pobiiii")).toThrow("[ERROR]");
  });
});
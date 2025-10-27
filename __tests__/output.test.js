import { printRoundResult } from "../src/output.js";
import { Console } from "@woowacourse/mission-utils";

describe("출력", () => {
  test("자동차의 현재 위치를 '-'로 출력한다.", () => {
    const spy = jest.spyOn(Console, "print").mockImplementation(() => {});
    const cars = [
      { name: "pobi", position: 2 },
      { name: "crong", position: 3 },
    ];

    printRoundResult(cars);

    expect(spy).toHaveBeenCalledWith("pobi : --");
    expect(spy).toHaveBeenCalledWith("crong : ---");
    expect(spy).toHaveBeenCalledWith("");
    spy.mockRestore();
  });
});
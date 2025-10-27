import { printRoundResult, printWinners } from "../src/output.js";
import { Console } from "@woowacourse/mission-utils";

describe("printRoundResult", () => {
  beforeEach(() => {
    jest.spyOn(Console, "print").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("자동차의 현재 위치를 '-'로 출력한다.", () => {
    const cars = [
      { name: "pobi", position: 2 },
      { name: "crong", position: 3 },
    ];

    printRoundResult(cars);

    expect(Console.print).toHaveBeenCalledWith("pobi : --");
    expect(Console.print).toHaveBeenCalledWith("crong : ---");
    expect(Console.print).toHaveBeenCalledWith("");
  });
});

describe("printWinners", () => {
  beforeEach(() => {
    jest.spyOn(Console, "print").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("우승자가 한 명일 경우 이름을 출력한다.", () => {
    const winners = ["pobi"];
    printWinners(winners);
    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : pobi");
  });

  test("우승자가 여러 명일 경우 쉼표로 구분해 출력한다.", () => {
    const winners = ["pobi", "woni", "jun"];
    printWinners(winners);
    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : pobi, woni, jun");
  });
});
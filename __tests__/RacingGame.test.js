import { Random } from "@woowacourse/mission-utils";
import RacingGame from "../src/RacingGame.js";

describe("RacingGame", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("4 이상인 경우에만 전진한다.", () => {
    jest
      .spyOn(Random, "pickNumberInRange")
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(3);

    const game = new RacingGame("pobi,woni");
    game.playRound();

    const cars = game.getCars();
    expect(cars[0].getPosition()).toBe(1);
    expect(cars[1].getPosition()).toBe(0);
  });

  test("단독 우승의 경우", () => {
    jest
      .spyOn(Random, "pickNumberInRange")
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(3);

    const game = new RacingGame("pobi,woni");
    game.playRound();
    game.playRound();

    expect(game.getWinners()).toEqual(["pobi"]);
  });

  test("공동 우승의 경우", () => {
    jest
      .spyOn(Random, "pickNumberInRange")
      .mockReturnValueOnce(4) 
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(3);

    const game = new RacingGame("pobi,woni");
    game.playRound();
    game.playRound();

    expect(game.getWinners()).toEqual(["pobi", "woni"]);
  });
});
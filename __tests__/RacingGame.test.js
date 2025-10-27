import { RacingGame } from "../src/RacingGame.js";
import * as randomUtils from "../src/utils/randomUtils.js"; // ← 모듈 전체를 가져와서 spyOn 가능하게

describe("RacingGame 클래스", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("랜덤 값이 4 이상이면 자동차가 전진한다.", () => {
    const carNames = ["pobi", "woni"];
    const game = new RacingGame(carNames);

    jest.spyOn(randomUtils, "getRandomNumber").mockReturnValue(7);
    game.playRound();

    game.cars.forEach((car) => {
      expect(car.position).toBe(1);
    });
  });

  test("랜덤 값이 4 미만이면 자동차가 전진하지 않는다.", () => {
    const carNames = ["pobi", "woni"];
    const game = new RacingGame(carNames);

    jest.spyOn(randomUtils, "getRandomNumber").mockReturnValue(2);

    game.playRound();
    game.cars.forEach((car) => {
      expect(car.position).toBe(0);
    });
  });
});
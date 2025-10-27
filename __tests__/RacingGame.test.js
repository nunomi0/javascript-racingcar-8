import { RacingGame } from "../src/RacingGame.js";
import * as randomUtils from "../src/utils/randomUtils.js";
import { Car } from "../src/Car.js";

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

  describe("우승자 선출", () => {
    test("가장 멀리 간 자동차가 단독 우승자가 된다.", () => {
      const game = new RacingGame(["pobi", "woni", "jun"]);
      game.cars = [
        new Car("pobi"),
        new Car("woni"),
        new Car("jun"),
      ];

      game.cars[0].position = 2;
      game.cars[1].position = 5;
      game.cars[2].position = 3;

      const winners = game.getWinners();
      expect(winners).toEqual(["woni"]);
    });

    test("가장 멀리 간 자동차가 여러 대면 공동 우승자가 된다.", () => {
      const game = new RacingGame(["pobi", "woni", "jun"]);
      game.cars = [
        new Car("pobi"),
        new Car("woni"),
        new Car("jun"),
      ];

      game.cars[0].position = 4;
      game.cars[1].position = 4;
      game.cars[2].position = 2;

      const winners = game.getWinners();
      expect(winners).toEqual(["pobi", "woni"]);
    });
  });
});
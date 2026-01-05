import { parseCarNames } from "./Validator.js";
import Car from "./Car.js";
import { Random } from "@woowacourse/mission-utils";

export default class RacingGame {
  constructor(carNames) {
    this.cars = parseCarNames(carNames).map((name) => new Car(name));
  }

  playRound() {
    this.cars.forEach((car) => {
      const number = Random.pickNumberInRange(0,9);
      if (number>=4){
        car.move();
      }
    });
  }
}
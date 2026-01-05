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

  getCars() {
    return this.cars;
  }

  getWinners() {
    let maxPosition = 0;
    for (let i = 0; i<this.cars.length; i++){
      maxPosition=Math.max(maxPosition, this.cars[i].getPosition());
    }

    const winners = [];
    for (let i = 0; i<this.cars.length; i++){
      if (this.cars[i].getPosition()===maxPosition) winners.push(this.cars[i].getName());
    }

    return winners;
  }
}

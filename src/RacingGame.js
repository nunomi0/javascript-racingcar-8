import { Car } from "./Car.js";

export class RacintGame {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }
}
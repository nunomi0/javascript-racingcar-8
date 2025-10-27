import { Console } from "@woowacourse/mission-utils";

export function printRoundResult(cars) {
  cars.forEach((car) => {
    const positionBar = "-".repeat(car.position);
    Console.print(`${car.name} : ${positionBar}`);
  });
  Console.print("");
}
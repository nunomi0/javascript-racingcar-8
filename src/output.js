import { Console } from "@woowacourse/mission-utils";

export function printRoundResult(cars) {
  cars.forEach((car) => {
    const positionBar = "-".repeat(car.position);
    Console.print(`${car.name} : ${positionBar}`);
  });
  Console.print("");
}

export function printWinners(winners) {
  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}
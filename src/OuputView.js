import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  static printResultHeader() {
    Console.print("실행 결과");
  } 

  static printRoundResult(cars) {
    cars.forEach((car) => {
      Console.print(car.getName() + " : " + "-".repeat(car.getPosition()));
    });
    Console.print("");
  }

  static printFinalWinner(winners) {
    Console.print("최종 우승자 : " + winners.join(", "));
  }
}

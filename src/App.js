import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import RacingGame from "./RacingGame.js";
import OutputView from "./OuputView.js";

class App {
  async run() {
    const carNames = await InputView.readCarNames();
    const tryCount = await InputView.readTryCount();
    
    const racingGame = new RacingGame(carNames);

    OutputView.printResultHeader();

    for (let i = 0; i<tryCount; i++){
      racingGame.playRound();
      OutputView.printRoundResult(racingGame.getCars());
    }

    OutputView.printFinalWinner(racingGame.getWinners());
  }
}

export default App;

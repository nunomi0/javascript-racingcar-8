import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import RacingGame from "./RacingGame.js";

class App {
  async run() {
    const carNames = await InputView.readCarNames();
    const tryCount = await InputView.readTryCount();
    
    const racingGame = new RacingGame(carNames);

    for (let i = 0; i<tryCount; i++){
      racingGame.playRound();
    }
  }
}

export default App;

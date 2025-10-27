import { readCarNames, readTryCount } from "./input.js";
import { validateCarNames, validateTryCount } from "./validator.js";
import { RacingGame } from "./RacingGame.js";

class App {
  async run() {
    const carNamesRaw = await readCarNames();
    const carNames = carNamesRaw.split(",").map((name) => name.trim());
    validateCarNames(carNames);

    const tryCount = await readTryCount();
    validateTryCount(tryCount);

    const game = new RacingGame(carNames);
    game.play(tryCount);
  }
}

export default App;

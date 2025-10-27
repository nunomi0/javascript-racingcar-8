import { readCarNames, readTryCount } from "./input.js";
import { validateCarNames, validateTryCount } from "./validator.js";

class App {
  async run() {
    const carNamesRaw = await readCarNames();
    const carNames = carNamesRaw.split(",").map((name) => name.trim());
    validateCarNames(carNames);
    const tryCount = await readTryCount();
    validateTryCount(tryCount);
  }
}

export default App;

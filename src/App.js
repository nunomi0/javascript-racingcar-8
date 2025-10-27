import { readCarNames, readTryCount } from "./input.js";

class App {
  async run() {
    const carNamesRaw = await readCarNames();
    const carNames = carNamesRaw.split(",").map((name) => name.trim());
    const tryCount = await readTryCount();
  }
}

export default App;

import { readCarNames, readTryCount } from "./input.js";

class App {
  async run() {
    const carNames = await readCarNames();
    const tryCount = await readTryCount();
  }
}

export default App;

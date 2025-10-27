import { readCarNames } from "./input.js";

class App {
  async run() {
    const carNames = await readCarNames();
  }
}

export default App;

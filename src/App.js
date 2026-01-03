import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";

class App {
  async run() {
    const carNames = await InputView.readCarNames();
    const tryCount = await InputView.readTryCount();

    Console.print(carNames);
    Console.print(tryCount);
  }
}

export default App;

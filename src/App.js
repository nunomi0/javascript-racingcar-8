import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import { parseCarNames } from "./Validator.js";

class App {
  async run() {
    const carNames = await InputView.readCarNames();
    const tryCount = await InputView.readTryCount();

    const names = parseCarNames(carNames);
    Console.print(names);

  }
}

export default App;

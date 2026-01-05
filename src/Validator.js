export function parseCarNames(input) {
  /*
  TODO:
  이름이 공백인 경우
  이름이 5자 이하가 아닌 경우
  */

  const carNames = input.split(",");
  for (const carName of carNames){
    if (carName.length>5) throw new Error("[ERROR]");
  }
  return carNames;
}
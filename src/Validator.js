export function parseCarNames(input) {
  const carNames = input.split(",");
  for (const carName of carNames){
    if (carName.length>5) throw new Error("[ERROR]");
  }
  return carNames;
}
export function validateCarNames(names) {
  if (names.some((name) => name.length === 0)) {
    throw new Error("[ERROR] 이름에 공백이 포함되어 있습니다.");
  }
  
  if (names.some((name) => name.trim().length > 5)) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  }
}

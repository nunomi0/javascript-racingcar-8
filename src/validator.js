export const MAX_CAR_NAME_LENGTH = 5;

export function validateCarNames(names) {
  if (names.some((name) => name.length === 0)) {
    throw new Error("[ERROR] 이름에 공백이 포함되어 있습니다.");
  }
  
  if (names.some((name) => name.trim().length > MAX_CAR_NAME_LENGTH)) {
    throw new Error(`[ERROR] 자동차 이름은 ${MAX_CAR_NAME_LENGTH}자 이하만 가능합니다.`);
  }
}

export function validateTryCount(count) {
  const num = Number(count);

  if (Number.isNaN(num)) {
    throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
  }

  if (!Number.isInteger(num)) {
    throw new Error("[ERROR] 시도 횟수는 정수여야 합니다.");
  }

  if (num<=0) {
    throw new Error("[ERROR] 시도 횟수는 0보다 커야 합니다.");
  }
}

// functions.js

export function getRandomNumber(n, m) {
  // Генерация случайного числа из диапазона
  const numberRange = Math.round(Math.random() * (m - n));
  // Итоговое случайное число из заданных чисел границы
  return n + numberRange;
}

// ---

export function setPause(count) {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve('End pause!');
    }, count * 1000);
  });

  return result;
}

// Class High
// Выигрышная стратегия: оставлять сопернику 12, 8, 4
export const stepComputerClassHigh = function (countMatches) {
  // 15, 14, 13
  if (countMatches > 12) {
    return countMatches - 12; // 3, 2, 1 = 12
  }

  // Здесь проигрыш - 12, любое от 1 до 3
  if (countMatches === 12) {
    return getRandomNumber(1, 3);
  }

  // 11, 10, 9
  if (countMatches > 8) {
    return countMatches - 8; // 3, 2, 1 = 8
  }

  // Здесь проигрыш - 8, любое от 1 до 3
  if (countMatches === 8) {
    return getRandomNumber(1, 3);
  }

  // 7, 6, 5
  if (countMatches > 4) {
    return countMatches - 4; // 3, 2, 1 = 4
  }

  // Здесь проигрыш - 4, любое от 1 до 3
  if (countMatches === 4) {
    return getRandomNumber(1, 3);
  }

  // 3, 2, 1
  return countMatches; // 3, 2, 1 = 0
};

// ---

// Class middle
// Выигрышная стратегия: оставлять сопернику 12, 8, 4
// Компьютер может ошибиться
export const stepComputerClassMiddle = function (countMatches) {
  // 15, 14, 13 // 3, 2, 1 = 12
  if (countMatches > 12) {
    const mistake = getRandomNumber(0, 1);
    return mistake ? getRandomNumber(1, 3) : countMatches - 12;
  }

  // Здесь проигрыш - 12, любое от 1 до 3
  if (countMatches === 12) {
    return getRandomNumber(1, 3);
  }

  // 11, 10, 9 // 3, 2, 1 = 8
  if (countMatches > 8) {
    const mistake = getRandomNumber(0, 1);
    return mistake ? getRandomNumber(1, 3) : countMatches - 8;
  }

  // Здесь проигрыш - 8, любое от 1 до 3
  if (countMatches === 8) {
    return getRandomNumber(1, 3);
  }

  // 7, 6, 5 // 3, 2, 1 = 4
  if (countMatches > 4) {
    const mistake = getRandomNumber(0, 1);
    return mistake ? getRandomNumber(1, 3) : countMatches - 4;
  }

  // Здесь проигрыш - 4, любое от 1 до 3
  if (countMatches === 4) {
    return getRandomNumber(1, 3);
  }

  // Здесь не ошибается
  // 3, 2, 1
  return countMatches; // 3, 2, 1 = 0
};

// ---

// Class Low
// Случайные числа
export const stepComputerClassLow = function (countMatches) {
  // 15 - 4
  if (countMatches > 3) {
    return getRandomNumber(1, 3);
  }

  // Здесь не ошибается
  // 3, 2, 1
  return countMatches;
};

// ---
// ---
// ---

// Give High
// Выигрышная стратегия: оставлять сопернику 13, 9, 5, 1
export const stepComputerGiveHigh = function (countMatches) {
  // 15, 14
  if (countMatches > 13) {
    return countMatches - 13; // 2, 1 = 13
  }

  // Здесь проигрыш - 13, любое от 1 до 3
  if (countMatches === 13) {
    return getRandomNumber(1, 3);
  }

  // 12, 11, 10
  if (countMatches > 9) {
    return countMatches - 9; // 3, 2, 1 = 9
  }

  // Здесь проигрыш - 9, любое от 1 до 3
  if (countMatches === 9) {
    return getRandomNumber(1, 3);
  }

  // 8, 7, 6
  if (countMatches > 5) {
    return countMatches - 5; // 3, 2, 1 = 5
  }

  // Здесь проигрыш - 5, любое от 1 до 3
  if (countMatches === 5) {
    return getRandomNumber(1, 3);
  }

  // 4, 3, 2
  if (countMatches > 1) {
    return countMatches - 1; // 3, 2, 1 = 1
  }

  // Здесь проигрыш - 1, 1
  return countMatches; // 1 = 0
};

// ---

// Give Middle
// Выигрышная стратегия: оставлять сопернику 13, 9, 5, 1
export const stepComputerGiveMiddle = function (countMatches) {
  // 15, 14 // 2, 1 = 13
  if (countMatches > 13) {
    const mistake = getRandomNumber(0, 1);
    return mistake ? getRandomNumber(1, 2) : countMatches - 13;
    // return countMatches - 13;
  }

  // Здесь проигрыш - 13, любое от 1 до 3
  if (countMatches === 13) {
    return getRandomNumber(1, 3);
  }

  // 12, 11, 10 // 3, 2, 1 = 9
  if (countMatches > 9) {
    const mistake = getRandomNumber(0, 1);
    return mistake ? getRandomNumber(1, 3) : countMatches - 9;
    // return countMatches - 9;
  }

  // Здесь проигрыш - 9, любое от 1 до 3
  if (countMatches === 9) {
    return getRandomNumber(1, 3);
  }

  // 8, 7, 6 // 3, 2, 1 = 5
  if (countMatches > 5) {
    const mistake = getRandomNumber(0, 1);
    return mistake ? getRandomNumber(1, 3) : countMatches - 5;
    // return countMatches - 5;
  }

  // Здесь проигрыш - 5, любое от 1 до 3
  if (countMatches === 5) {
    return getRandomNumber(1, 3);
  }

  // Здесь не ошибается
  // 4, 3, 2
  if (countMatches > 1) {
    return countMatches - 1; // 3, 2, 1 = 1
  }

  // Здесь проигрыш - 1, 1
  return countMatches; // 1 = 0
};

// ---

// Give Low
// Случайные числа
export const stepComputerGiveLow = function (countMatches) {
  // 15 - 3
  if (countMatches > 4) {
    return getRandomNumber(1, 3);
  }

  // Здесь не ошибается
  // 4, 3, 2
  if (countMatches > 1) {
    return countMatches - 1; // 3, 2, 1 = 1
  }

  // Здесь проигрыш - 1, 1
  // 1
  return countMatches;
};

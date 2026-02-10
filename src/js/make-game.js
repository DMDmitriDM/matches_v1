// make-game.js

import {
  setPause,
  getRandomNumber,
  stepComputerClassHigh,
  stepComputerClassMiddle,
  stepComputerClassLow,
  stepComputerGiveHigh,
  stepComputerGiveLow,
  stepComputerGiveMiddle,
} from './functions.js';

export default function makeGame() {
  // variables
  // ---------

  let countMatches;
  let rulesWinner;
  let rulesStep;
  let rulesLevel;

  let stepComputer;

  // elements
  // --------

  const blindBox = document.querySelector('.box-game__blind');
  const arrRulesRadio = document.querySelectorAll('.rules__radio');
  const arrMatchesImg = document.querySelectorAll('.matches__images-match');
  const btnStart = document.getElementById('id-btn-start');
  const btnEnd = document.getElementById('id-btn-end');
  const arrBtnStep = document.querySelectorAll('.step-player__btn');
  const spanTakeMatches = document.querySelector('.matches__take-span');
  const spanCountMatches = document.querySelector(
    '.matches__number-span-count',
  );
  const spanWinnerMatches = document.querySelector('.matches__winner-span');

  // load game
  // ---------
  countMatches = 15;
  refreshElToEnd();
  spanCountMatches.textContent = String(countMatches);
  spanTakeMatches.textContent = '';
  spanWinnerMatches.textContent = '';

  // events btns
  // -----------

  btnStart.addEventListener('click', async () => {
    countMatches = 15;
    refreshElToStart();
    // -
    refreshArrMatchesStart();
    spanCountMatches.textContent = String(countMatches);
    spanTakeMatches.textContent = '';
    spanWinnerMatches.textContent = '';

    rulesWinner = document.querySelector(
      "input[type='radio'][name=winner]:checked",
    ).value;
    rulesStep = document.querySelector(
      "input[type='radio'][name=step]:checked",
    ).value;
    rulesLevel = document.querySelector(
      "input[type='radio'][name=level]:checked",
    ).value;

    // console.log
    // console.log('rulesWinner: ', rulesWinner);
    // console.log('rulesStep: ', rulesStep);
    // console.log('rulesLevel: ', rulesLevel);
    // console.log('---');

    // Class
    if (rulesWinner === '0' && rulesLevel === '2') {
      stepComputer = stepComputerClassHigh;
    } else if (rulesWinner === '0' && rulesLevel === '1') {
      stepComputer = stepComputerClassMiddle;
    } else if (rulesWinner === '0' && rulesLevel === '0') {
      stepComputer = stepComputerClassLow;
      // Give
    } else if (rulesWinner === '1' && rulesLevel === '2') {
      stepComputer = stepComputerGiveHigh;
    } else if (rulesWinner === '1' && rulesLevel === '1') {
      stepComputer = stepComputerGiveMiddle;
    } else if (rulesWinner === '1' && rulesLevel === '0') {
      stepComputer = stepComputerGiveLow;
    }

    // Жребий - кто первым ходит
    if (rulesStep === '0') {
      rulesStep = String(getRandomNumber(1, 2));
    }

    // console.log
    // console.log('rulesStep: ', rulesStep);
    // console.log('---');

    // Если Компьютер то Ход компьютера
    if (rulesStep === '1') {
      blindBox.classList.add('box-game__blind--active');
      await setPause(getRandomNumber(1, 2) + 0.4);

      const countStepComputer = stepComputer(countMatches);
      countMatches -= countStepComputer;
      spanCountMatches.textContent = String(countMatches);
      // -
      refreshArrMatchesTake(countMatches);
      spanTakeMatches.textContent = `Компьютер взял спичек: ${countStepComputer}`;
      refreshArrBtnStep(); // Здесь наверно лишнее
      // console.log
      // console.log('Ход компьютера: ', countStepComputer);

      blindBox.classList.remove('box-game__blind--active');
    }
  });

  // ---

  for (const btnStep of arrBtnStep) {
    btnStep.addEventListener('click', async () => {
      // Ход игрока
      const countStepPlayer = Number(btnStep.dataset.step);
      countMatches -= countStepPlayer;
      spanCountMatches.textContent = String(countMatches);
      // -
      refreshArrMatchesTake(countMatches);
      spanTakeMatches.textContent = `Игрок взял спичек: ${countStepPlayer}`;
      refreshArrBtnStep();
      //console.log
      // console.log('Ход игрока: ', countStepPlayer);

      // Игрок забрал последние(юю) и rulesWinner = 0
      if (countMatches === 0 && rulesWinner === '0') {
        refreshElToEnd();
        spanWinnerMatches.textContent = '= Победитель - Игрок =';
        return;
      }

      // Игрок забрал последние(юю) и rulesWinner = 1
      if (countMatches === 0 && rulesWinner === '1') {
        refreshElToEnd();
        spanWinnerMatches.textContent = '= Победитель - Компьютер =';
        return;
      }

      // Ход компьютера
      blindBox.classList.add('box-game__blind--active');
      await setPause(getRandomNumber(1, 2) + 0.4);

      const countStepComputer = stepComputer(countMatches);
      countMatches -= countStepComputer;
      spanCountMatches.textContent = String(countMatches);
      // -
      refreshArrMatchesTake(countMatches);
      spanTakeMatches.textContent = `Компьютер взял спичек: ${countStepComputer}`;
      refreshArrBtnStep();
      // console.log
      // console.log('Ход компьютера: ', countStepComputer);

      blindBox.classList.remove('box-game__blind--active');

      // Компьютер забрал последние(юю) и rulesWinner = 0
      if (countMatches === 0 && rulesWinner === '0') {
        refreshElToEnd();
        spanWinnerMatches.textContent = '= Победитель - Компьютер =';
      }

      // Компьютер забрал последние(юю) и rulesWinner = 1
      if (countMatches === 0 && rulesWinner === '1') {
        refreshElToEnd();
        spanWinnerMatches.textContent = '= Победитель - Игрок =';
      }
    });
  }

  // ---

  btnEnd.addEventListener('click', () => {
    refreshElToEnd();
    spanWinnerMatches.textContent = 'Вы проиграли!';
  });

  // function
  // --------

  function refreshElToEnd() {
    for (const rulesRadio of arrRulesRadio) {
      rulesRadio.removeAttribute('disabled');
    }

    btnStart.removeAttribute('disabled');
    btnEnd.setAttribute('disabled', '');

    for (const btnStep of arrBtnStep) {
      btnStep.setAttribute('disabled', '');
    }
  }

  function refreshElToStart() {
    for (const rulesRadio of arrRulesRadio) {
      rulesRadio.setAttribute('disabled', '');
    }

    btnStart.setAttribute('disabled', '');
    btnEnd.removeAttribute('disabled');

    for (const btnStep of arrBtnStep) {
      btnStep.removeAttribute('disabled');
    }
  }

  function refreshArrBtnStep() {
    if (countMatches >= 3) {
      return;
    } else if (countMatches === 2) {
      arrBtnStep[2].setAttribute('disabled', '');
    } else if (countMatches === 1) {
      arrBtnStep[2].setAttribute('disabled', '');
      arrBtnStep[1].setAttribute('disabled', '');
    } else {
      arrBtnStep[2].setAttribute('disabled', '');
      arrBtnStep[1].setAttribute('disabled', '');
      arrBtnStep[0].setAttribute('disabled', '');
    }
  }

  function refreshArrMatchesStart() {
    for (const matchesImg of arrMatchesImg) {
      matchesImg.classList.remove('matches__images-match--hidden');
    }
  }

  function refreshArrMatchesTake(countMatches) {
    for (let i = arrMatchesImg.length - 1; i >= countMatches; i--) {
      arrMatchesImg[i].classList.add('matches__images-match--hidden');
    }
  }
}

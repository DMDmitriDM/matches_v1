// create-elements.js

export default function createElements() {
  // container
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.append(container);

  // boxGame
  const boxGame = document.createElement('div');
  boxGame.classList.add('box-game', 'box-game--set');
  container.append(boxGame);

  // blind
  const blind = document.createElement('div');
  blind.classList.add('box-game__blind');
  boxGame.append(blind);

  const blindWrapSpan = document.createElement('div');
  blindWrapSpan.classList.add('box-game__blind-wrap-span');
  blind.append(blindWrapSpan);

  const blindSpan = document.createElement('span');
  blindSpan.classList.add('box-game__blind-span');
  blindSpan.textContent = 'Думаю';
  blindWrapSpan.append(blindSpan);

  // boxGameTitle
  const boxGameTitle = document.createElement('h1');
  boxGameTitle.classList.add('box-game__title');
  boxGameTitle.textContent = 'Игра "спички"';
  boxGame.append(boxGameTitle);

  // ------------ //
  // boxGameRules //
  // ------------ //

  const boxGameRules = document.createElement('div');
  boxGameRules.classList.add('box-game__rules', 'rules', 'rules--set');
  boxGame.append(boxGameRules);

  // winner
  const titleWinner = document.createElement('h4');
  titleWinner.classList.add('rules__title');
  titleWinner.textContent = 'Победитель:';
  boxGameRules.append(titleWinner);

  const rulesWrapWinner = document.createElement('div');
  rulesWrapWinner.classList.add('rules__wrap', 'rules__wrap--column');
  boxGameRules.append(rulesWrapWinner);

  const arrNamesRadioWinner = [
    'Кто берет последние(юю) спички(у)',
    'Кто не берет последнюю спичку',
  ];

  for (let i = 0; i < arrNamesRadioWinner.length; i++) {
    const rulesWrapRadio = document.createElement('div');
    rulesWrapRadio.classList.add(
      'rules__wrap-radio',
      'rules__wrap-radio--margin-bottom',
    );
    rulesWrapWinner.append(rulesWrapRadio);

    const rulesRadio = document.createElement('input');
    rulesRadio.classList.add('rules__radio', 'visually-hidden');
    rulesRadio.setAttribute('type', 'radio');
    rulesRadio.setAttribute('name', 'winner');
    rulesRadio.setAttribute('value', `${i}`);
    rulesRadio.setAttribute('id', `id-radio-winner-${i}`);
    if (i === 0) {
      rulesRadio.checked = true;
    }
    rulesWrapRadio.append(rulesRadio);

    const rulesLabel = document.createElement('label');
    rulesLabel.classList.add('rules__label');
    rulesLabel.setAttribute('for', `id-radio-winner-${i}`);
    rulesLabel.textContent = arrNamesRadioWinner[i];
    rulesWrapRadio.append(rulesLabel);
  }

  // Step
  const titleStep = document.createElement('h4');
  titleStep.classList.add('rules__title');
  titleStep.textContent = 'Кто первым ходит:';
  boxGameRules.append(titleStep);

  const rulesWrapStep = document.createElement('div');
  rulesWrapStep.classList.add('rules__wrap', 'rules__wrap--line');
  boxGameRules.append(rulesWrapStep);

  const arrNamesRadioStep = ['Жребий', 'Компьютер', 'Игрок'];

  for (let i = 0; i < arrNamesRadioStep.length; i++) {
    const rulesWrapRadio = document.createElement('div');
    rulesWrapRadio.classList.add(
      'rules__wrap-radio',
      'rules__wrap-radio--margin-right',
    );
    rulesWrapStep.append(rulesWrapRadio);

    const rulesRadio = document.createElement('input');
    rulesRadio.classList.add('rules__radio', 'visually-hidden');
    rulesRadio.setAttribute('type', 'radio');
    rulesRadio.setAttribute('name', 'step');
    rulesRadio.setAttribute('value', `${i}`);
    rulesRadio.setAttribute('id', `id-radio-step-${i}`);
    if (i === 2) {
      rulesRadio.checked = true;
    }
    rulesWrapRadio.append(rulesRadio);

    const rulesLabel = document.createElement('label');
    rulesLabel.classList.add('rules__label');
    rulesLabel.setAttribute('for', `id-radio-step-${i}`);
    rulesLabel.textContent = arrNamesRadioStep[i];
    rulesWrapRadio.append(rulesLabel);
  }

  // Level
  const titleLevel = document.createElement('h4');
  titleLevel.classList.add('rules__title');
  titleLevel.textContent = 'Сложность игры:';
  boxGameRules.append(titleLevel);

  const rulesWrapLevel = document.createElement('div');
  rulesWrapLevel.classList.add('rules__wrap', 'rules__wrap--line');
  boxGameRules.append(rulesWrapLevel);

  const arrNamesRadioLevel = ['Простой', 'Средний', 'Сложный'];

  for (let i = 0; i < arrNamesRadioLevel.length; i++) {
    const rulesWrapRadio = document.createElement('div');
    rulesWrapRadio.classList.add(
      'rules__wrap-radio',
      'rules__wrap-radio--margin-right',
    );
    rulesWrapLevel.append(rulesWrapRadio);

    const rulesRadio = document.createElement('input');
    rulesRadio.classList.add('rules__radio', 'visually-hidden');
    rulesRadio.setAttribute('type', 'radio');
    rulesRadio.setAttribute('name', 'level');
    rulesRadio.setAttribute('value', `${i}`);
    rulesRadio.setAttribute('id', `id-radio-level-${i}`);
    if (i === 2) {
      rulesRadio.checked = true;
    }
    rulesWrapRadio.append(rulesRadio);

    const rulesLabel = document.createElement('label');
    rulesLabel.classList.add('rules__label');
    rulesLabel.setAttribute('for', `id-radio-level-${i}`);
    rulesLabel.textContent = arrNamesRadioLevel[i];
    rulesWrapRadio.append(rulesLabel);
  }

  // -------- //
  // btnStart //
  // -------- //

  const btnStart = document.createElement('button');
  btnStart.classList.add('box-game__btn', 'btn-reset');
  btnStart.setAttribute('type', 'button');
  btnStart.setAttribute('id', 'id-btn-start');
  btnStart.textContent = 'Начать игру';
  boxGame.append(btnStart);

  // -------------- //
  // boxGameMatches //
  // -------------- //

  const boxGameMatches = document.createElement('div');
  boxGameMatches.classList.add('box-game__matches', 'matches', 'matches--set');
  boxGame.append(boxGameMatches);

  // imagesMatches
  const matchesImagesWrap = document.createElement('div');
  matchesImagesWrap.classList.add('matches__images-wrap');
  boxGameMatches.append(matchesImagesWrap);

  const matchesImages = document.createElement('div');
  matchesImages.classList.add('matches__images');
  matchesImagesWrap.append(matchesImages);

  for (let i = 0; i < 15; i++) {
    const matchesImagesMatch = document.createElement('div');
    matchesImagesMatch.classList.add('matches__images-match');
    matchesImages.append(matchesImagesMatch);
  }

  // matchesTake
  const matchesTake = document.createElement('span');
  matchesTake.classList.add('matches__take-span');
  matchesTake.textContent = 'Взято спичек:';
  boxGameMatches.append(matchesTake);

  // matchesNumber
  const matchesNumber = document.createElement('div');
  matchesNumber.classList.add('matches__number');
  boxGameMatches.append(matchesNumber);

  const matchesNumberTitle = document.createElement('span');
  matchesNumberTitle.classList.add('matches__number-span-title');
  matchesNumberTitle.textContent = 'Осталось спичек:';
  matchesNumber.append(matchesNumberTitle);

  const matchesNumberCount = document.createElement('span');
  matchesNumberCount.classList.add('matches__number-span-count');
  matchesNumberCount.textContent = '15';
  matchesNumber.append(matchesNumberCount);

  // matchesWinner
  const matchesWinner = document.createElement('span');
  matchesWinner.classList.add('matches__winner-span');
  matchesWinner.textContent = 'Победитель не определён!';
  boxGameMatches.append(matchesWinner);

  // ----------------- //
  // boxGameStepPlayer //
  // ----------------- //

  const boxGameStepPlayer = document.createElement('div');
  boxGameStepPlayer.classList.add(
    'box-game__step-player',
    'step-player',
    'step-player--set',
  );
  boxGame.append(boxGameStepPlayer);

  const stepPlayerTitle = document.createElement('h4');
  stepPlayerTitle.classList.add('step-player__title');
  stepPlayerTitle.textContent = 'Выбери, сколько спичек взять:';
  boxGameStepPlayer.append(stepPlayerTitle);

  const stepPlayerWrapBtns = document.createElement('div');
  stepPlayerWrapBtns.classList.add('step-player__wrap');
  boxGameStepPlayer.append(stepPlayerWrapBtns);

  for (let i = 0; i < 3; i++) {
    const stepPlayerBtn = document.createElement('button');
    stepPlayerBtn.classList.add('step-player__btn', 'btn-reset');
    stepPlayerBtn.setAttribute('type', 'button');
    stepPlayerBtn.dataset.step = `${i + 1}`;
    stepPlayerBtn.textContent = `${i + 1}`;
    stepPlayerWrapBtns.append(stepPlayerBtn);
  }

  // ------ //
  // btnEnd //
  // ------ //

  const btnEnd = document.createElement('button');
  btnEnd.classList.add('box-game__btn', 'btn-reset');
  btnEnd.setAttribute('type', 'button');
  btnEnd.setAttribute('id', 'id-btn-end');
  btnEnd.textContent = 'Сдаться';
  boxGame.append(btnEnd);
}

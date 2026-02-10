// index.js

import '../css/no_postcss/normalize.css';
import '../css/ok_postcss/style.css';

import icon from '../assets/images/matchbox.ico';

import createElements from './create-elements.js';
import makeGame from './make-game.js';

const linkIcon = document.createElement('link');
linkIcon.rel = 'icon';
linkIcon.type = 'image/x-icon';
linkIcon.href = icon;
document.head.append(linkIcon);

createElements();
makeGame();

// document.addEventListener('DOMContentLoaded', () => {
//   const linkIcon = document.createElement('link');
//   linkIcon.rel = 'icon';
//   linkIcon.type = 'image/x-icon';
//   linkIcon.href = icon;
//   document.head.append(linkIcon);

//   createElements();
//   makeGame();
// });

const jokes_cm = require('./commonJS');
import { jokes } from './es6';

// 支持commonJS
jokes_cm.getOne()
  .then(joke => {
    document.getElementById('joke').innerHTML = joke;
  });

// 支持ES6模块化
// jokes.getOne()
//   .then(joke => {
//     document.getElementById('joke').innerHTML = joke;
//   });

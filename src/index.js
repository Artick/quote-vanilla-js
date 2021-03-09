import Quote from './templates/Quote.js';

(async function App () {
  const main = null || document.getElementById ('main');
  main.innerHTML = await Quote();
}) ();

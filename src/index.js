import Quote from './templates/Quote.js';
import './styles/style.css';

(async function App () {
  const main = null || document.getElementById ('main');
  main.innerHTML = await Quote ();
}) ();

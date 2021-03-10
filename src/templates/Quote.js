import getData from '../utils/getData.js';
import github from '../assets/images/github.png';
import twitter from '../assets/images/twitter.png';

const Quote = async () => {
  const data = await getData ();
  const view = `
  <div class="card">
    <p class="card__quote"> ${data.text} </p>
    <p class="card__quote-author">- ${data.author} -</p>
    <footer>
    <a href="https://twitter.com/artick" target="_blank">
      <img src="${twitter}" />
    </a>
    <a href="https://github.com/artick" target="_blank">
      <img src="${github}" />
    </a>
    </footer>
  </div>
  `;
  return view;
};

export default Quote;

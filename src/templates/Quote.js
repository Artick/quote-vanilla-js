import getData from '../utils/getData.js';

const Quote = async () => {
  const data = await getData ();
  const view = `
  <div class="card">
    <p class="card__quote"> ${data.text} </p>
    <p class="card__quote-author">- ${data.author} -</p>
    <footer>
    <a href="https://twitter.com/artick" target="_blank">
      <img src="../src/assets/images/twitter.png" />
    </a>
    <a href="https://github.com/artick" target="_blank">
      <img src="../src/assets/images/github.png" />
    </a>
    </footer>
  </div>
  `;
  return view;
};

export default Quote;

import renderToDom from '../utils/renderToDom';
// placeholder to store joke locally and access it
let jokeInMemory = {};

const showJoke = (joke) => {
  jokeInMemory = joke;
  let domString = '';
  domString += `<h3>${joke.setup}</h3>`;
  renderToDom('#joke-container', domString);
  return joke;
};

const showPunchline = () => {
  let domString = '';
  domString += `<h3>${jokeInMemory.delivery}</h3>`;
  renderToDom('#punchline', domString);
  return jokeInMemory;
};

export { showJoke, showPunchline };

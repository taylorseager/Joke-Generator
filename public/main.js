// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { showJoke, showPunchline } from '../pages/showJoke';
import renderToDom from '../utils/renderToDom';
import getAJoke from '../api/jokeData';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>HELLO! Welcome to the Joke Generator 5000!</h1>
    <div id="joke-container"></div>
    <div id="joke"></div>
    <div id="punchline"></div>
    <div id="btn-container">
      <button class="btn btn-danger" id="joke-btn">Get A Joke!</button><br />
    </div>
    <hr />
  `;

  document
    .querySelector('#btn-container')
    .addEventListener('click', () => console.warn('You click that button!'));

  // ********* base it off the content of the button?? *************
  // ********* conditional in the showJoke.js **********************
  document
    .querySelector('#btn-container')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('joke-btn')) {
        renderToDom('#btn-container', '<button class="btn btn-danger" id="punchline-btn">Get Punchline!</button><br />');
        getAJoke().then((response) => {
          showJoke(response);
          document.querySelector('#punchline').style.display = 'none';
        });
      }
      if (e.target.id.includes('punchline-btn')) {
        document.querySelector('#punchline').style.display = 'block';
        renderToDom('#btn-container', '<button class="btn btn-danger" id="joke-btn">Get Another Joke!</button><br />');
        showPunchline();
      }
    });
  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};

init();

/* eslint-disable linebreak-style */
import {
  content, title, textBox, textHolder, tabNav,
} from './elements';
import about from './about_tab';

const populatePage = () => {
  title.textContent = 'The Forager';
  textBox.className = 'text';
  content.appendChild(title);
  content.appendChild(textBox);
  textBox.insertAdjacentElement('afterbegin', tabNav);
  textHolder.innerHTML = about;
};

export default populatePage;

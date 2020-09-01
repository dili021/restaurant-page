/* eslint-disable no-nested-ternary */
import '../style.scss';
import menu from './menu_tab';
import {
  textBox, textHolder,
} from './elements';
import populatePage from './populate_page';
import about from './about_tab';
import contact from './contact_tab';

populatePage();

const tabSwitch = e => {
  if (e.target.classList.contains('tab')) {
    textHolder.innerHTML = '';
    const tabName = e.target.classList[1];
    textHolder.innerHTML = tabName === 'menu' ? menu : tabName === 'about' ? about : contact;
  }
};
textBox.addEventListener('click', tabSwitch);

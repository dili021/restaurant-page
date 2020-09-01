/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
const content = document.querySelector('.content');
const title = document.createElement('h1');
const textBox = document.createElement('div');
const tabNav = document.createElement('ul');
const aboutTabBtn = document.createElement('li');
const menuTabBtn = document.createElement('li');
const contactTabBtn = document.createElement('li');
const textHolder = document.createElement('div');
textHolder.className = 'text-holder';
tabNav.className = 'tab-menu';
aboutTabBtn.classList.add('tab', 'about');
menuTabBtn.classList.add('tab', 'menu');
contactTabBtn.classList.add('tab', 'contact');

[aboutTabBtn, menuTabBtn, contactTabBtn].forEach(tab => {
  tab.textContent = tab.classList[1];
  tabNav.appendChild(tab);
});
textBox.appendChild(textHolder);
export {
  content, title, textBox, tabNav, textHolder,
};

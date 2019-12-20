import './styles.css';

import menu from './js/menu.json';
import menuItems from './templates/post-menu-items.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
}

buildMenu(menu);

function buildMenu(menu) {
  const markup = menu.map(_menu => menuItems(_menu)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}



const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.classList.add(Theme.LIGHT);

const getThems = function () {

  input.checked ? document.body.classList.replace(Theme.LIGHT, Theme.DARK) : document.body.classList.replace(Theme.DARK, Theme.LIGHT);
     
}

const input = document.querySelector('.js-switch-input');

input.addEventListener('change', getThems);

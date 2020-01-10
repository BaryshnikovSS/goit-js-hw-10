
import data from './json/menu.json';
import menuTemplate from './templates/post-menu-items.hbs';

const refs = {
  menuList: document.querySelector('.js-menu'),
}

createMarkup(data, menuTemplate, refs.menuList);

function createMarkup(dataArray, template, refParent) {
  const markup = dataArray.reduce((acc, currentItem) => {
    return (acc += template(currentItem));
  }, '');
  return refParent.insertAdjacentHTML('beforeend', markup);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.classList.add(Theme.LIGHT);

const changeTheme = function() {

  if (input.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK)
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT)
  };

}

const input = document.querySelector('.js-switch-input');

input.addEventListener('change', changeTheme);

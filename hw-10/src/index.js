import './styles.css';

import data from './json/menu.json';
import menuTemplate from './templates/post-menu-items.hbs';

const refs = {
  menuList: document.querySelector('.js-menu'),
  switchBtn: document.querySelector('.js-switch-input'),
}

// Создай страницу меню с возможностью выбора темы для сервиса заказа еды.

createMarkup(data, menuTemplate, refs.menuList);

function createMarkup(dataArray, template, refParent) {
  const markup = dataArray.reduce((acc, currentItem) => {
    return (acc += template(currentItem));
  }, '');
  return refParent.insertAdjacentHTML('beforeend', markup);
}

// Реализуй функционал изменения темы при нажатии (событие change) на чекбокс input.js-switch-input в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. 
// Для хранения активной темы используй localStorage.
// Если при загрузке страницы тема темная, не забудь поставить свойство checked 
// у чекбокса input.js-switch-input в true, чтобы ползунок сдвинулся в правильное положение.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const defaultTheme = selectedTheme();
document.body.classList.add(defaultTheme);

function selectedTheme() {
  if (localStorage.getItem('Theme') === null) {
    return Theme.LIGHT;
  } else {
    if (localStorage.getItem('Theme') === Theme.DARK) {
      refs.switchBtn.setAttribute('checked', true);
    }
    return localStorage.getItem('Theme');
  }
}

refs.switchBtn.addEventListener('change', changeTheme);

function changeTheme(e) {
  if (e.currentTarget.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  };
}
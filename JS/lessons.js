// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

//   <div id='root'>
//     <form id='form'>
//         <input type="text" id="input">
//       <button>Пошук</button>
//     </form>
// </div>
// console.log("Hello world")
// const BASE_URL = 'https://pixabay.com/api';
// const API_KEY = '38021332-8e9737bba173cb2c49ad632d1';

// fetch(`${BASE_URL}/?key=${API_KEY}&category=backgrounds,fashion`)
//     .then(response =>
//         response.json()
//     )
//     .then((data) => selectEl(data.hits))
//     .catch(err => console.log(err))

// function markup({ webformatURL }) {
//     const image = document.createElement('img');
//     image.src = webformatURL;
//     image.width = 250;
//     handleContainer.appendChild(image)
// }
// const handleContainer = document.querySelector('.ds-container')

// function selectEl(arr) {
//     for (const iterator of arr) {
//        markup(iterator)
//     }

// }

// ЗАДАЧА 3
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
// //
// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const container = document.querySelector(".js-container");
const button = document.querySelector(".js-button");

form.addEventListener("submit", onLoad);
let page = 1;
function onLoad(event) {
  event.preventDefault();
  const markup = input.value;
  fetch(
    `https://api.github.com/search/users?q=${markup}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${page}`
  )
    .then((resp) => resp.json())
    .then((data) => objectMarkup(data.items))
    .then(() => page++)
    .catch((err) => console.log(err));
}
button.addEventListener("click", onLoad);
// login
// html_url
// avatar_url

function createMarkup({ login, html_url, avatar_url }) {
  const markup = `<img src="${avatar_url}" alt="${login}">
  <h2>${login}</h2><a href="${html_url}">Посилання на GitHub</a>`;
  container.insertAdjacentHTML("beforeend", markup);
}
function objectMarkup(arr) {
  arr.forEach((element) => createMarkup(element));
}

// Завдання 3
// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const gallery = document.querySelector("ul.gallery");
// const markup = images.map(
//   ({ url, alt }) => `<li><img src='${url}' alt = '${alt}' width = "200"></li>`
// );
// gallery.insertAdjacentHTML("afterbegin", markup);


// ЗАДАЧА 1 
// Створіть карточки товару з масиву використовуючи createElement

// js/
import cars from './date/cars.js'


const carsList = document.querySelector('.js-goods');

function makeProductCards ({name, img, price, description}){
  const element = document.createElement('li');
  const elementName = document.createElement('h2');
  elementName.textContent = name;
  const elementImg = document.createElement('img');
  elementImg.src = img;
  elementImg.width = 200;
  const elementPrice = document.createElement('p');
  elementPrice.textContent = `Price ${price} грн`;
  elementPrice.classList.add('class-ul');
  const elementDescription = document.createElement('p');
  elementDescription.textContent = description;

  element.append(elementImg, elementName, elementPrice, elementDescription);
  return element;
}

const markup = cars.map(makeProductCards);
console.log(markup);
carsList.append(...markup);


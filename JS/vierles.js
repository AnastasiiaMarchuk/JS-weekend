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
// import cars from './date/cars.js'


// const carsList = document.querySelector('.js-goods');

// function makeProductCards ({name, img, price, description}){
//   const element = document.createElement('li');
//   const elementName = document.createElement('h2');
//   elementName.textContent = name;
//   const elementImg = document.createElement('img');
//   elementImg.src = img;
//   elementImg.width = 200;
//   const elementPrice = document.createElement('p');
//   elementPrice.textContent = `Price ${price} грн`;
//   elementPrice.classList.add('class-ul');
//   const elementDescription = document.createElement('p');
//   elementDescription.textContent = description;

//   element.append(elementImg, elementName, elementPrice, elementDescription);
//   return element;
// }

// const markup = cars.map(makeProductCards);
// console.log(markup);
// carsList.append(...markup);

// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// html/

// const refs = {
//   form: document.querySelector('.form'),
//   formInput: document.querySelector('#price'),
//   inputRange: document.querySelector('#quantity'),
//   totalPrice: document.querySelector('.total'),
//   label: document.querySelector('.amount'),
//   container: document.querySelector('.container')
// }
    
// function calculator(event) {
//   event.preventDefault();
//   const figuresInput = refs.formInput.value;
//   const figuresRange = refs.inputRange.value;
//   const total = figuresInput * figuresRange;
//   refs.totalPrice.textContent = total;
//   refs.label.textContent = figuresRange;
//   return total;
// }

// window.addEventListener("DOMContentLoaded", calculator);

// refs.form.addEventListener('submit', calculator);

// // 2.2 ПЕРЕПИШІТЬ КОД, ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ,
// //   ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// //     < button class="btn" > Calculate</ >

// function onButtonClick() {
//   const figuresRange = refs.inputRange.value;
//    refs.label.textContent = figuresRange;
// }

// refs.inputRange.addEventListener('input', onButtonClick);

// // 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ 
// // ІНЛАЙНОВОГО СТИЛЮ
// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// refs.container.style.backgroundColor = randomRgbColor();
// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

// function letMeSeeYourName (callback) {
//     const name = prompt("Введіть своє їм'я");
//     callback(name)
// }
// function greet(name){
//     console.log(`Привіт ${name}`)
// }

// letMeSeeYourName(greet)

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// function makeProduct(name, price, callback) {
//     const products = {
// name, price, id: Date.now()
//     }
//     callback(products);
// };

// function showProduct(products) {
//     console.log(products);
// };

// makeProduct("Холодильник", 10000, showProduct);

// ЗАДАЧА 3
// МАЄМО МАСИВ, ПОТРІБНО:
// 1)получити масив вчених які народились у 19ст;
// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// 3) відсортувати по алфавіту;
// 4)відсортувати по кількості прожитих років;
// 5)відфільтрувати, хто народився в 15,16,17ст;
// 6)знайти рік народження Albert Einstein;
// 7)визначити, чи усі вчені працювали у 19ст;
// const scientists = [
//   {
//     name: "Albert",
//     surname: "Einstein",
//     born: 1879,
//     dead: 1955,
//     id: 1,
//   },
//   {
//     name: "Isaac",
//     surname: "Newton",
//     born: 1643,
//     dead: 1727,
//     id: 2,
//   },
//   {
//     name: "Galileo",
//     surname: "Galilei",
//     born: 1564,
//     dead: 1642,
//     id: 3,
//   },
//   {
//     name: "Marie",
//     surname: "Curie",
//     born: 1867,
//     dead: 1934,
//     id: 4,
//   },
//   {
//     name: "Johannes",
//     surname: "Kepler",
//     born: 1571,
//     dead: 1630,
//     id: 5,
//   },
//   {
//     name: "Nicolaus",
//     surname: "Copernicus",
//     born: 1473,
//     dead: 1543,
//     id: 6,
//   },
//   {
//     name: "Max",
//     surname: "Planck",
//     born: 1858,
//     dead: 1947,
//     id: 7,
//   },
//   {
//     name: "Katherine",
//     surname: "Blodgett",
//     born: 1898,
//     dead: 1979,
//     id: 8,
//   },
//   {
//     name: "Ada",
//     surname: "Lovelace",
//     born: 1815,
//     dead: 1852,
//     id: 9,
//   },

//   {
//     name: "Lise",
//     surname: "Meitner",
//     born: 1878,
//     dead: 1968,
//     id: 11,
//   },
//   {
//     name: "Sarah E.",
//     surname: "Goode",
//     born: 1855,
//     dead: 1905,
//     id: 10,
//   },
//   {
//     name: "Hanna",
//     surname: "Hammarström",
//     born: 1829,
//     dead: 1909,
//     id: 12,
//   },
// ];

// 1)получити масив вчених які народились у 19ст;
// const nameOld = scientists
//   .filter((sentist) => sentist.born >= 1800 && sentist.born < 1900)
//   .map((sentist) => `${sentist.name} ${sentist.surname}`);
// console.log(nameOld);

// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// const number = scientists.reduce(
//   (acc, sentis) => acc + (sentis.dead - sentis.born),
//   0
// );
// console.log(number / scientists.length);

// / 3) відсортувати по алфавіту;

// const sorting = [...scientists].sort((a, b) =>
//   a.name[0] > b.name[0] ? 1 : - 1
// );
// console.log(sorting);

// 4)відсортувати по кількості прожитих років;
// const number = [...scientists].sort(
//   (a, b) => a.dead - a.born - (b.dead - b.born)
// );
// console.log(number);

// / 5)відфільтрувати, хто народився в 15,16,17ст;

// const number = scientists.filter(
// (sentist) => sentist.born > 1400 && sentist.born < 1700
// );
// console.log(number);

// 6)знайти рік народження Albert Einstein;

// const number = [...scientists].find(
//   ({ name, surname }) => name === "Albert" && surname === "Einstein"
// );
// console.log(number.born);

// 7)визначити, чи усі вчені працювали у 19ст;

// const name = scientists.every(
//   (sentist) =>
//     (sentist.born > 1800 && sentist.born < 1900) || sentist.dead > 1800
// );
// console.log(name);

// ЗАДАЧА 4
// Сортування примітивів.
// Виконати сортування масиву цін зі спадання та зростання.

// const prices = [2, 14, 1, 37, 26, 8];
// const increase = [...prices].sort((a, b) => a - b);
// console.log(increase);
// const decrease = [...prices].sort((a, b) => b - a);
// console.log(decrease);

// ЗАДАЧА 5
// Виконати сортування масиву назв моніторів в алфавітному та зворотному алфавітному порядку.

// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];

// const name = [...items].sort((a, b) => (a > b ? 1 : -1));
// console.log(name);
// const nameReverse = [...items].sort((a, b) => (a > b ? -1 : 1));
// console.log(nameReverse);

// ЗАДАЧА 6
// Зібрати в allTopics масив усіх предметів всіх курсів використовуючи flatMap.
// Використовуючи Array.prototype.filter виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи.

const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Functions",
      "Conditions",
      "Classes",
      "DOM",
      "Git",
      "GitHub",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: [
      "VSCode",
      "NPM",
      "Bundlers",
      "Transpiling",
      "Promises",
      "AJAX",
      "Git",
      "GitHub",
    ],
  },
];

const array = courses.flatMap((course) => course.topics);
console.log(array);
const newArray = array.filter(
  (topics, index, arr) => arr.indexOf(topics) === index
);
console.log(newArray);

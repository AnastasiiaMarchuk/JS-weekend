// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles.splice(1,1, 'Классика');
// const first = styles.shift();
// console.log(first);
// styles.unshift('Рэп', 'Регги')

// console.log(styles)

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const masyv = ['Mango', 'Poly', 'Ajax'];
// function logItems(array) {
//     for (const arra of masyv) {
//         console.log(masyv.indexOf(arra), arra)
//     }

// }

// logItems()

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// // 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));
// let minNumbers = numbers[0];
// for (let num of numbers) {
//   if (minNumbers > num) {
//     minNumbers = num;
//   }
// }
// console.log(minNumbers);

// function findSmallestNumber(numbers) {
//   return Math.min(...numbers);
// }
// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
// const str = "ротатор"; //true
// const newString = "Hello"; //false
// const world = str.split("").reverse().join("");
// console.log(world === str);
// const string = newString.split("").reverse().join("");
// console.log(string === newString);

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими
// function calculateAverage() {
//   console.log(arguments);
//   const numbers = Array.from(arguments);

//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total / numbers.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"

// function greet(name = "гість") {

//     return `Привіт, ${name}`;
// }
//  console.log(greet("Василь"));//Привіт Василь
//  console.log(greet());//Привіт гість

// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію
// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }

// const foo = function checkNumbers(a, b) {
//       if (a > b) {
//         return `число ${a} більше ${b}`;
//       }

//       return `число ${b} більше ${a}`;
//     }

// const checkNumbers = (a, b) => {
//     if (a > b) {
//         return `число ${a} більше ${b}`;
//       }

//       return `число ${b} більше ${a}`;
// }

// const checkNumbers = (a, b) => a > b ? `число ${a} більше ${b}` :  `число ${b} більше ${a}`

// // ЗАДАЧА 8
// // Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// console.log(capitalize('the quick brown fox'))// 'The Quick Brown Fox '

// function capitalize(string) {
//     const words = string.split(' ');
//     const ajax = [];
//     for (const word of words) {
//         let name = word[0].toUpperCase();
//         const banan = word.slice(1);
//         const kiwi = `${name}${banan}`;
//        ajax.push(kiwi);
//     }
//     return ajax.join(' ');
// }
// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function addCourse(course) {
  if (courses.includes(course)) {
    console.log("У вас уже є такий курс");
    return;
  }
  courses.push(course);
}
function removeCourse(course) {
  let courseIndex = courses.indexOf(course);
  if (courseIndex === -1) {
    console.log("Курс з таким іменем не найдено");
    return;
  }
  courses.splice(courseIndex, 1);
}

function updateCourse(courseToDelete, courseToAdd) {
  let oldName = courses.indexOf(courseToDelete);
  courses.splice(oldName, 1, courseToAdd);
}
addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse("CSS"); // 'У вас уже є такий курс'
removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Курс з таким іменем не найдено'
updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
console.log(courses);

// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
//  const name = "ГАЛИНА";
//  const age = 35;
//  const language = "JAVASCRIPT";
//  console.log(`ДОБРОГО ДНЯ, МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${language}`);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("імя");
// const email = prompt("пошта");
// const numder = prompt("телефон");
// console.log(
//   `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${email} ПОЧТУ І ${numder} ТЕЛЕФОН`
// );

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const computerPrise = +prompt("Ціна комп'ютера");
// const phonePrise = Number(prompt("Ціна телефону"));
// const blenderPrise = Number(prompt("Ціна блендера"));
// console.log(computerPrise + phonePrise + blenderPrise);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const year = Number(prompt('how years'))
// if (year === 12) {
//     console.log(right)
// } else {
//     console.log("НЕ ЗНАЄТЕ? 12")
// }
// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.
// const nummer = Number(prompt("Введіть число"));
// if (nummer % 2 === 0) {
//   console.log("парне");
// } else {
//   console.log("непарне");
// }
// const message = nummer % 2 === 0 ? "парне" : "непарне";

// console.log(message);
//  const month = Number(prompt("Ваш місяць народження:"));

// if (month === 1 || month === 2 || month === 12) {
//    console.log("Ви народилися взимку");
// } else if (month >= 3 && month <= 5) {
//    console.log("Ви народилися навесні");
// } else if (month >= 6 && month <= 8) {
//    console.log("Ви народилися влітку");
// } else if (month >= 9 && month <= 11) {
//    console.log("Ви народилися восени");
//  } else {
//   console.log("Такого місяця не існує");
// }
// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН
// const password = 'iryna';
// const login = 'irynakhossain';
// const userPassword = prompt("Введіть пароль");
// const userLogin = prompt("Введіть логін");
// // if (userPassword === password && userLogin === login) {
// //     console.log('Дані вірні')

// // } else {
// //     console.log(" Дані не вірні")
// // }
// const message =
//     userPassword === password && userLogin === login ? "Дані вірні" : 'Дані не вірні';
// console.log(message);

// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

// const subscribe = prompt(`Ціна підписки`);
// if (subscribe === "День") {
//   console.log("ціна 1.99");
// } else if (subscribe === "НЕДІЛЯ") {
//   console.log("ціна 5.99");
// } else if (subscribe === "МІСЯЦЬ") {
//   console.log("ціна 10.99");
// } else if (subscribe === "РІК") {
//   console.log("ціна 100.99");
// } else {
//   console.log("ТАКОЇ ПІДПИСКИ НЕ ІСНУЄ");
// }

// switch (subscribe) {
//   case "День":
//     console.log("ціна 1.99");
//     break;
//   case "НЕДІЛЯ":
//     console.log("ціна 5.99");
//     break;
//   case "МІСЯЦЬ":
//     console.log("ціна 10.99");
//     break;
//   case "РІК":
//     console.log("ціна 100.99");
//     break;
//   default:
//     console.log("ТАКОЇ ПІДПИСКИ НЕ ІСНУЄ");
//     break;
// }

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
console.log("Hello world")
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '38021332-8e9737bba173cb2c49ad632d1';

fetch(`${BASE_URL}/?key=${API_KEY}&category=backgrounds,fashion`)
    .then(response => 
        response.json()
    )
    .then((data) => selectEl(data.hits))
    .catch(err => console.log(err))

function markup({ webformatURL }) {
    const image = document.createElement('img');
    image.src = webformatURL;
    image.width = 250;
    handleContainer.appendChild(image)
}
const handleContainer = document.querySelector('.ds-container')


function selectEl(arr) {
    for (const iterator of arr) {
       markup(iterator) 
    }

}
    

  
// 3) УМОВА
// Зробити фіксований скрол на сторінці для менюшки, тобто, щоб наше меню фіксувалось зверху браузера при скролі,
//     для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed - nav якщо скрол більше висоту хедера,
//         в іншому випадку його видаляємо


// const header = document.querySelector('.header');
// const navigation = document.querySelector('.nav');

// // console.log(header.clientHeight)
// // pageYOffset
// // scrollY

// const headerHeight = header.clientHeight;

// function scrollHeader() {
//     if (scrollY > headerHeight) {
//         navigation.classList.add('fixed-nav')
//     } else {
//         navigation.classList.remove('fixed-nav')
//     }
// }

// window.addEventListener('scroll', scrollHeader);
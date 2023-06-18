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

// УМОВА ЗАДАЧІ:
// Написати сайт на якому під час завантаження програється відео.
// Як тільки відео пропадає з області видимості більш ніж на 50% - ставити його на паузу

const video = document.querySelector("video");

function callback() {
  if (!video.paused) {
    video.pause();
  } else {
    video.play();
  }
  let observer = new IntersectionObserver(callback, { threshold: 0.5 });
  observer.observer(video);
}

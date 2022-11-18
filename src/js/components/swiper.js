const images = document.querySelectorAll('.swiper__line img');
const swiper = document.querySelector('.swiper');
const swiperLine = document.querySelector('.swiper__line');
const pagination = document.querySelectorAll('.swiper__pagination_item');
const swiperButtons = document.querySelector('.swiper__buttons');
const swiperNextBtn = document.querySelector('.swiper__button_next');
const swiperPrevBtn = document.querySelector('.swiper__button_prev');

let count = 0;
let width = 0;

function resizeSwiper() {
  console.log('resize swiper');
  width = swiper.offsetWidth;
  swiperLine.style.width = width * images.length + 'px';
  images.forEach((image) => {
    image.style.width = width + 'px';
    image.style.height = 'auto';
  });
  buttonsPositionSwiper();
  rollSwiper();
  setTimeout(buttonsPositionSwiper, 300);
}

function rollSwiper() {
  swiperLine.style.transform = 'translate(-'+count*width+'px)';
  buttonsPositionSwiper();
}

function swiperLeft() {
  count--;
    if (count < 0) {
      count = images.length - 1;
    }
    rollSwiper();
    paginationActive();
}

function swiperRight() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
}

function buttonsPositionSwiper() {
  // console.log(document.querySelector('.swiper__line').clientHeight);
  // console.log(swiperLine.offsetHeight);
  // console.log(images[1].clientHeight);
  swiperButtons.style.bottom = ((swiperLine.offsetHeight + swiperPrevBtn.offsetHeight)  / 2) + 'px';
}

function paginationActive() {
  pagination.forEach((item) => {
    item.classList.remove('active');
  });
  pagination[count].classList.add('active');
}

resizeSwiper();

window.addEventListener('resize', resizeSwiper);

swiperNextBtn.addEventListener('click', () => {
  swiperRight();
  rollSwiper();
  paginationActive();
});

swiperPrevBtn.addEventListener('click', () => {
  swiperLeft();
  rollSwiper();
  paginationActive();
});

pagination.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    count = index;
    rollSwiper();
    paginationActive();
  });
});

swiper.addEventListener('touchstart', handleTouchStart, false);
// swiper.addEventListener('touchmove', handleTouchMove, false);
swiper.addEventListener('touchend', haldleTouchEnd, false);

let x1 = null;
let x2 = null;
let x3 = null;

function handleTouchStart(event) {
  x1 = event.touches[0].clientX;
}

// function handleTouchMove(event) {
//   let x2 = event.touches[0].clientX;
//   // console.log(x2);
//   let xDiff = x2 - x1;
//   // console.log(xDiff);
//   if (xDiff > 0) {
//     // console.log('пред слайд *вправо');
//     console.log(xDiff);
//     swiperLine.style.transform = `translate(${swiperLine.clientHeight+(xDiff/4)}px)`;
//   } else {
//     // console.log('след слайд *влево');
//     console.log(xDiff);
//     swiperLine.style.transform = `translate(-${swiperLine.clientHeight+(xDiff/4)}px)`;
//   }
//   x2 = null;
// }

function haldleTouchEnd(event) {
  rollSwiper();
  x3 = event.changedTouches[0].clientX;

  let xDiff = x3 - x1;

  if (xDiff < -(width/4)) {
    swiperRight();
    rollSwiper();
    paginationActive();
  } else if (xDiff > (width/4)){
    swiperLeft();
    rollSwiper();
    paginationActive();
  }
  x1 = null;
  x2 = null;
  x3 = null;
}



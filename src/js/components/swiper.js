const swiper = document.querySelector('.swiper');
const images = document.querySelectorAll('.swiper__line img');
const swiperLine = document.querySelector('.swiper__line');
const pagination = document.querySelectorAll('.swiper__pagination_item');
const swiperButtons = document.querySelector('.swiper__buttons');
const swiperNextBtn = document.querySelector('.swiper__button_next');
const swiperPrevBtn = document.querySelector('.swiper__button_prev');

let count = 0;
let width = 0;

function resizeSwiper() {
  width = swiper.offsetWidth;
  swiperLine.style.width = width * images.length + 'px';
  images.forEach((image) => {
    image.style.width = width + 'px';
    image.style.height = 'auto';
  });
  swiperLine.addEventListener('transitionend', buttonsPositionSwiper);
  rollSwiper();
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
swiper.addEventListener('touchend', haldleTouchEnd, false);

let x1 = null;
let x2 = null;

function handleTouchStart(event) {
  x1 = event.touches[0].clientX;
}

function haldleTouchEnd(event) {
  rollSwiper();
  
  x2 = event.changedTouches[0].clientX;
  let xDiff = x2 - x1;

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
}



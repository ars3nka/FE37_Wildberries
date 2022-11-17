const images = document.querySelectorAll('.swiper__line img');
const swiperLine = document.querySelector('.swiper__line');
const pagination = document.querySelectorAll('.swiper__pagination_item');
const swiperButtons = document.querySelector('.swiper__buttons');
const swiperNextBtn = document.querySelector('.swiper__button_next');
const swiperPrevBtn = document.querySelector('.swiper__button_prev');

let count = 0;
let width = 0;

function resizeSwiper() {
  console.log('resize swiper');
  width = document.querySelector('.swiper').offsetWidth;
  swiperLine.style.width = width * images.length + 'px';
  images.forEach((image) => {
    image.style.width = width + 'px';
    image.style.height = 'auto';
  });
  console.log(document.querySelector('.swiper__line').clientHeight);
  swiperButtons.style.bottom = ((swiperLine.offsetHeight + swiperPrevBtn.offsetHeight)  / 2) + 'px';
  rollSwiper();
}

window.addEventListener('resize', resizeSwiper);

resizeSwiper();



swiperNextBtn.addEventListener('click', () => {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSwiper();
  paginationActive();
});

swiperPrevBtn.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSwiper();
  paginationActive();
});

function rollSwiper() {
  swiperLine.style.transform = 'translate(-'+count*width+'px)';
}

function paginationActive() {
  pagination.forEach((item) => {
    item.classList.remove('active');
  });
  pagination[count].classList.add('active');
}

pagination.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    count = index;
    rollSwiper();
    paginationActive();
  });
});


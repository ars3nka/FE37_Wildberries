export function popUpListeners(cardButton, popUpBg, popUp, popUpButtonClose) {
  cardButton.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';

    popUpBg.classList.add('active');
    popUp.classList.add('active');

    resizePopupSwiper();
    window.addEventListener('transitionend', resizePopupSwiper);
  });

  popUpButtonClose.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '';
    popUpBg.classList.remove('active');
    popUp.classList.remove('active');
  });
  document.addEventListener('click', (e) => {
    if (e.target === popUpBg) {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '';
      popUpBg.classList.remove('active');
      popUp.classList.remove('active');
    }
  });
}

function resizePopupSwiper() {
  const image = document.querySelector('.active .image');
  const images = document.querySelectorAll('.active .image');
  const sliderLine = document.querySelector('.active .popup_slider');
  const containerInfo = document.querySelector('.active .container_info');

  if (sliderLine) {
    sliderLine.style.width = image.clientWidth + 'px';

    if (window.screen.width < 600) {
      sliderLine.style.width = containerInfo.clientWidth + 'px';
      sliderLine.style.height = (containerInfo.clientWidth / 3 * 4) + 'px';
      images.forEach((image) => {
        image.style.width = containerInfo.clientWidth + 'px';
        image.style.height = (containerInfo.clientWidth / 3 * 4) + 'px';
      });
    }
  }
}
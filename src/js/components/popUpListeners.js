export function popUpListeners(cardButton, popUpBg, popUp, popUpButtonClose) {
  cardButton.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';

    popUpBg.classList.add('active');
    popUp.classList.add('active');
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

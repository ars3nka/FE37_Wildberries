export function sliderPopUp(popUpButtonPrev, popUpButtonNext, sliderLine) {
  let offset = 0;
  popUpButtonPrev.disabled = true;
  popUpButtonPrev.classList.add('disabled_button');
  popUpButtonPrev.addEventListener('click', () => {
    const image = document.querySelector('.active .image');
    offset += image.clientWidth;
    if (offset >= 0) {
      popUpButtonPrev.disabled = true;
      popUpButtonPrev.classList.add('disabled_button');
    } else if (offset >= -image.clientWidth) {
      popUpButtonNext.disabled = false;
      popUpButtonNext.classList.remove('disabled_button');
    }
    sliderLine.style.left = offset + 'px';
  });
  popUpButtonNext.addEventListener('click', () => {
    const image = document.querySelector('.active .image');
    offset -= image.clientWidth;
    if (offset <= -(image.clientWidth * 2)) {
      popUpButtonNext.disabled = true;
      popUpButtonNext.classList.add('disabled_button');
    } else if (offset < 0) {
      popUpButtonPrev.disabled = false;
      popUpButtonPrev.classList.remove('disabled_button');
    }
    sliderLine.style.left = offset + 'px';
  });
}

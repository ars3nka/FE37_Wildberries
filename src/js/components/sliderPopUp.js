export function sliderPopUp(popUpButtonPrev, popUpButtonNext, sliderLine) {
  let offset = 0;
  popUpButtonPrev.disabled = true;
  popUpButtonPrev.classList.add('disabled_button');
  popUpButtonPrev.addEventListener('click', () => {
    offset += 450;
    if (offset >= 0) {
      popUpButtonPrev.disabled = true;
      popUpButtonPrev.classList.add('disabled_button');
    } else if (offset >= -450) {
      popUpButtonNext.disabled = false;
      popUpButtonNext.classList.remove('disabled_button');
    }
    sliderLine.style.left = offset + 'px';
  });
  popUpButtonNext.addEventListener('click', () => {
    offset -= 450;
    if (offset <= -900) {
      popUpButtonNext.disabled = true;
      popUpButtonNext.classList.add('disabled_button');
    } else if (offset < 0) {
      popUpButtonPrev.disabled = false;
      popUpButtonPrev.classList.remove('disabled_button');
    }
    sliderLine.style.left = offset + 'px';
  });
}

import Inputmask from 'inputmask';

// Модалка авторизации

const modalWrapper = document.querySelector('.modal__wrapper');
const modalOpenBtn = document.querySelector('.header__profile');
const modalCloseBtn = document.querySelector('.modal__close');
const inputUserPhone = document.querySelector('input[type=phone]');
const inputCountryCode = document.querySelector('#country__code');
const inputButton = document.querySelector('.get__code');
const inputValidatorDiv = document.querySelector('.modal__input_validator');
const modalCheckbox = document.querySelector('input[type=checkbox]');

let inputPhoneMask = new Inputmask('(99) 999-99-99');

inputPhoneMask.mask(inputUserPhone);

export function toggleModal() {
  modalWrapper.classList.toggle('modal__hide');
  if (modalWrapper.classList.contains('modal__hide')) {
    document.body.style.overflow = ''; 
    } else { 
      document.body.style.overflow = 'hidden'; 
  }
}

modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);

modalWrapper.addEventListener('click', (e) => {
  if (e.target === modalWrapper) {
    toggleModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    if (!modalWrapper.classList.contains('modal__hide')) {
      modalWrapper.classList.add('modal__hide');
    }
  }
});

// Валидатор номера телефона

function validatePhone(phone) {
  let regex = /^\(?[0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return regex.test(phone);
}

// Работа с input и checkbox

inputButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (validatePhone(inputUserPhone.value)) {
    let userPhone = `${inputCountryCode.value} ${inputUserPhone.value}`;
    let userData = [{ "Номер пользователя": userPhone}];
    inputValidatorDiv.classList.add('modal__input_validator'); 
    if (modalCheckbox.checked) {
      sessionStorage.setItem('userBasket', JSON.stringify(userData));
      localStorage.removeItem('userBasket');
    } else {
      localStorage.setItem('userBasket', JSON.stringify(userData));
      sessionStorage.removeItem('userBasket');
    }
    inputUserPhone.value = '';
    modalWrapper.classList.add('modal__hide');
    document.body.style.overflow = ''; 
  } else {
    inputValidatorDiv.classList.remove('modal__input_validator');
  }
});

import { getData, cardPath } from '../service/service.js';

const modalBasketCardsWrapper = document.querySelector(
  '.wrapper__basket_cards'
);
const modalPleaseRegister = document.querySelector(
  '.modal_please_register_wrapper'
);

window.addEventListener('click', (e) => {
  if (!modalPleaseRegister.classList.contains('modal_please_register_hide')) {
    modalPleaseRegister.classList.add('modal_please_register_hide');
  }
  if (e.target.className === 'btn_basket') {
    if (localStorage.length !== 0 || sessionStorage.length !== 0) {
      getData(cardPath).then((cards) => {
        const checkedCard = cards.filter((card) => card.id === e.target.id);
        if (localStorage.length !== 0) {
          const userArray = JSON.parse(localStorage.getItem('userBasket'));
          userArray.push(checkedCard[0]);
          localStorage.setItem('userBasket', JSON.stringify(userArray));
        } else if (sessionStorage.length !== 0) {
          const userArray = JSON.parse(sessionStorage.getItem('userBasket'));
          userArray.push(checkedCard[0]);
          sessionStorage.setItem('userBasket', JSON.stringify(userArray));
        }
        modalBasketCardsWrapper.innerHTML = '';
      });
    } else {
      modalPleaseRegister.classList.remove('modal_please_register_hide');
    }
  }
});

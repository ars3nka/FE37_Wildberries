import { getData, cardPath } from '../service/service.js';
import { userBasketCounter } from '../modal/userBasketCounter.js';

const modalBasketCardsWrapper = document.querySelector(
  '.wrapper__basket_cards'
);
const modalPleaseRegister = document.querySelector(
  '.modal_please_register_wrapper'
);

function checkItemInBasket(storage, checkedItem) {
  const userArray = JSON.parse(storage.getItem('userBasket'));
  const findItem = userArray.find((item) => item.id === checkedItem[0].id);
  if (findItem) {
    const newUserArray = userArray.map((item) => {
      if (item.id === findItem.id) {
        item.amount += 1;
        return item;
      } else {
        return item;
      }
    });
    storage.setItem('userBasket', JSON.stringify(newUserArray));
  } else {
    checkedItem[0].amount = 1;
    userArray.push(checkedItem[0]);
    storage.setItem('userBasket', JSON.stringify(userArray));
  }
}

function checkItemInBasket(storage, checkedItem) {
  const userArray = JSON.parse(storage.getItem('userBasket'));
  const findItem = userArray.find((item) => item.id === checkedItem[0].id);
  if (findItem) {
    const newUserArray = userArray.map((item) => {
      if (item.id === findItem.id) {
        item.amount += 1;
        return item;
      } else {
        return item;
      }
    });
    storage.setItem('userBasket', JSON.stringify(newUserArray));
  } else {
    checkedItem[0].amount = 1;
    userArray.push(checkedItem[0]);
    storage.setItem('userBasket', JSON.stringify(userArray));
  }
}

window.addEventListener('click', (e) => {
  if (!modalPleaseRegister.classList.contains('modal_please_register_hide')) {
    modalPleaseRegister.classList.add('modal_please_register_hide');
  }
  if (e.target.className === 'btn_basket') {
    if (localStorage.length !== 0 || sessionStorage.length !== 0) {

      e.target.classList.add('btn_basket_added');
      document.querySelector('.btn_basket_added').textContent = 'Товар добавлен';
      setTimeout(()=> {
        document.querySelector('.btn_basket_added').textContent = 'Добавить в корзину';
        e.target.classList.remove('btn_basket_added');
      }, 1500);

      getData(cardPath).then((cards) => {
        const checkedCard = cards.filter((card) => card.id === e.target.id);
        if (localStorage.length !== 0) {
          checkItemInBasket(localStorage, checkedCard);
        } else if (sessionStorage.length !== 0) {
          checkItemInBasket(sessionStorage, checkedCard);
        }
        modalBasketCardsWrapper.innerHTML = '';
        userBasketCounter();
      });
    } else {
      modalPleaseRegister.classList.remove('modal_please_register_hide');
    }
  }
});

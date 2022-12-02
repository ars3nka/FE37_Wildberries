import { BasketCard } from './createBasketCards.js';

function modalBasket() {
  const modalBasketWrapper = document.querySelector('#modal_basket');
  const modalBasketClose = document.querySelector('.modal__basket_close');
  const modalBasketOpen = document.querySelector('.header__basket');
  const modalBasketCardsWrapper = document.querySelector(
    '.wrapper__basket_cards'
  );
  const modalBasketTotalPrice = document.querySelector(
    '.modal_basket_order_total'
  );
  const modalBasketTotalDiv = document.querySelector('.modal_basket_total');
  const modalBasketOrderButton = document.querySelector('.modal_basket_order');
  const modalBasketClear = document.querySelector('.modal__basket_clean');

  function toggleBasketModal() {
    modalBasketWrapper.classList.toggle('modal__hide');
    if (modalBasketWrapper.classList.contains('modal__hide')) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  function hideButtons() {
    modalBasketTotalPrice.classList.add('modal__hide');
    modalBasketOrderButton.classList.add('modal__hide');
    modalBasketClear.classList.add('modal__hide');
    modalBasketTotalDiv.classList.add('modal__hide');
  }

  function showButtons() {
    modalBasketTotalPrice.classList.remove('modal__hide');
    modalBasketOrderButton.classList.remove('modal__hide');
    modalBasketClear.classList.remove('modal__hide');
    modalBasketTotalDiv.classList.remove('modal__hide');
  }

  function getUserBacketItems(data) {
    let count = 0;
    modalBasketCardsWrapper.innerHTML = '';
    hideButtons();
    data.forEach((card, i) => {
      if (i > 0) {
        new BasketCard(
          card.id,
          card.src,
          card.description,
          card.priceNow,
          modalBasketCardsWrapper
        ).renderBasketCardItem();
        count += +card.priceNow;
        showButtons();
      }
    });
    modalBasketTotalPrice.innerHTML = `${count.toFixed(2)} р.`;
    if (data.length === 1) {
      modalBasketCardsWrapper.innerHTML = '<h2>В вашей корзине пусто!</h2>';
    }
  }

  function renderUserBacketItems(localStorageData, sessionStorageData) {
    toggleBasketModal();
    modalBasketCardsWrapper.innerHTML = '<h2>В вашей корзине пусто!</h2>';
    if (localStorage.getItem('userBasket')) {
      getUserBacketItems(localStorageData);
    } else if (sessionStorage.getItem('userBasket')) {
      getUserBacketItems(sessionStorageData);
    }
  }

  function getDataFromStorage(storage) {
    const userData = [];
    userData.push(JSON.parse(storage.getItem('userBasket'))[0]);
    storage.setItem('userBasket', JSON.stringify(userData));
  }

  function showUserOrder(storage) {
    console.log(JSON.parse(storage.getItem('userBasket')));
    modalBasketCardsWrapper.innerHTML = '<h2>Спасибо за заказ :)</h2>';
    modalBasketTotalPrice.innerHTML = '';
    hideButtons();
    getDataFromStorage(storage);
  }

  modalBasketOpen.addEventListener('click', () => {
    hideButtons();
    const userProductsInLocalStorage = JSON.parse(
      localStorage.getItem('userBasket')
    );
    const userProductsInSessionStorage = JSON.parse(
      sessionStorage.getItem('userBasket')
    );
    renderUserBacketItems(
      userProductsInLocalStorage,
      userProductsInSessionStorage
    );
  });

  modalBasketClose.addEventListener('click', toggleBasketModal);

  modalBasketWrapper.addEventListener('click', (e) => {
    if (e.target === modalBasketWrapper) {
      toggleBasketModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      if (!modalBasketWrapper.classList.contains('modal__hide')) {
        modalBasketWrapper.classList.add('modal__hide');
      }
    }
  });

  modalBasketClear.addEventListener('click', () => {
    modalBasketCardsWrapper.innerHTML = '<h2>В вашей корзине пусто!</h2>';
    modalBasketTotalPrice.innerHTML = '';
    if (localStorage.getItem('userBasket')) {
      getDataFromStorage(localStorage);
    } else if (sessionStorage.getItem('userBasket')) {
      getDataFromStorage(sessionStorage);
    }
    hideButtons();
  });

  modalBasketOrderButton.addEventListener('click', () => {
    if (localStorage.length !== 0 || sessionStorage.length !== 0) {
      if (localStorage.getItem('userBasket')) {
        showUserOrder(localStorage);
      } else if (sessionStorage.getItem('userBasket')) {
        showUserOrder(sessionStorage);
      }
    } else {
      modalBasketCardsWrapper.innerHTML = '<h2>В вашей корзине пусто!</h2>';
      modalBasketTotalPrice.innerHTML = '';
      showButtons();
    }
  });

  window.addEventListener('click', (e) => {
    if (e.target.className === 'basket_card__close') {
      modalBasketCardsWrapper.innerHTML = '<h2>В вашей корзине пусто!</h2>';
      hideButtons();
      if (localStorage.getItem('userBasket')) {
        const userProductsInStorage = JSON.parse(
          localStorage.getItem('userBasket')
        ).filter((card) => card.id !== e.target.id);
        localStorage.setItem(
          'userBasket',
          JSON.stringify(userProductsInStorage)
        );
        getUserBacketItems(userProductsInStorage);
      } else if (sessionStorage.getItem('userBasket')) {
        const userProductsInStorage = JSON.parse(
          sessionStorage.getItem('userBasket')
        ).filter((card) => card.id !== e.target.id);
        sessionStorage.setItem(
          'userBasket',
          JSON.stringify(userProductsInStorage)
        );
        getUserBacketItems(userProductsInStorage);
      }
    }
  });
}

export default modalBasket;

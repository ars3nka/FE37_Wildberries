import createElement from './createElement.js';
import { getData } from '../service/service';

class Card {
  constructor(
    src,
    alt,
    priceNow,
    priceLast,
    brand,
    description,
    parentSelector,
    id
  ) {
    this.src = src;
    this.alt = alt;
    this.priceNow = priceNow;
    this.priceLast = priceLast;
    this.brand = brand;
    this.description = description;
    this.parent = document.querySelector(parentSelector);
    this.id = id;
    this.calcDiscount();
  }

  calcDiscount() {
    this.priceNow = String(this.priceNow).replace(/ /g, '');
    this.priceLast = String(this.priceLast).replace(/ /g, '');
    this.priceNow = String(this.priceNow).replace(/,/, '.');
    this.priceLast = String(this.priceLast).replace(/,/, '.');

    this.discount =
      ((+this.priceNow - +this.priceLast) * 100) / +this.priceLast;
    this.discount = Math.ceil(this.discount);
    this.priceNow = new Intl.NumberFormat('ru-RU').format(this.priceNow);
    this.priceLast = new Intl.NumberFormat('ru-RU').format(this.priceLast);
  }

  render() {
    const element = createElement('li', { className: 'card' });
    element.innerHTML = ` 
    <div class='card_container__image'>
    <p class='card_discount'>${this.discount}%</p>
    <img src=${this.src} alt=${this.alt} />
    </div>
    <div class='goods_card_price'>
    <p>
    <ins class='price_now'>${this.priceNow} </ins>
    <del class='price_last'>${this.priceLast} </del>
    </p>
    <p class='goods_card__description'>
    <span class='goods_card_brand'>${this.brand}</span
    ><span>${this.description}</span>
    </p>
    </div>
    <button class='btn_basket'>Добавить в корзину</button>
    `;

    const popUpBg = createElement('div', { className: 'popup__bg' });
    const popUp = createElement('div', { className: 'popup' });
    const image = createElement('img', {
      className: 'image',
      src: `${this.src}`,
    });
    const additionalInfo = createElement('div', {
      className: 'container_info',
    });
    const brandContainer = createElement('div', {
      className: 'brand_container',
    });
    const brandName = createElement('span', {
      className: 'brand_name',
      textContent: `${this.brand}`,
    });
    const brandDescription = createElement('span', {
      className: 'brand_description',
      textContent: `${this.description}`,
    });
    const priceContainer = createElement('div', {
      className: 'price_container',
    });

    const priceNow = createElement('ins', {
      textContent: `${this.priceNow}`,
      className: 'price_now',
    });
    const priceLast = createElement('del', {
      textContent: `${this.priceLast}`,
      className: 'price_last',
    });
    const cardButton = createElement('button', {
      className: 'preview__btn',
      textContent: 'Быстрый просмотр',
    });
    const popUpButtonClose = createElement('button', {
      className: 'popup_button',
    });
    const popUpButtonBasket = createElement('button', {
      className: 'btn_basket',
      textContent: 'Добавить в корзину',
    });

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
    priceContainer.append(priceNow, priceLast);
    brandContainer.append(brandName, brandDescription, priceContainer);
    additionalInfo.append(
      popUpButtonClose,
      brandContainer,

      popUpButtonBasket
    );
    popUp.append(image, additionalInfo);
    popUpBg.append(popUp);
    element.append(cardButton, popUpBg);
    this.parent.append(element);
  }
}

const cardPath = 'https://637910567419b414df8975c2.mockapi.io/card';
getData(cardPath).then((products) => {
  products.forEach((card) => {
    new Card(
      card.src,
      card.alt,
      card.priceNow,
      card.priceLast,
      card.brand,
      card.description,
      card.parentSelector,
      card.id
    ).render();
  });
});
export default new Card();

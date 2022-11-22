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
    this.id = id
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
    element.innerHTML = ` <li class="card">
      <div class="card_container__image">
        <button class="preview__btn">Быстрый просмотр</button>
        <p class="card_discount">${this.discount}%</p>
        <img src=${this.src} alt=${this.alt} />
      </div>
      <div class="goods_card_price">
        <p>
          <ins class="price_now">${this.priceNow} p.</ins>
          <del class="price_last">${this.priceLast} p.</del>
        </p>
        <p class="goods_card__description">
          <span class="goods_card_brand">${this.brand}</span
          ><span>${this.description}</span>
        </p>
      </div>
      <button id=${this.id} class="btn_basket">Добавить в корзину</button>
    </li>`;
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

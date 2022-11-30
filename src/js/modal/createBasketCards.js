export class BasketCard{
    constructor(
        id,
        src,
        description,
        priceNow,
        amount,
        selector
    ) {
        this.id = id;
        this.src = src;
        this.description = description;
        this.priceNow = priceNow;
        this.amount = amount;
        this.selector = selector
    }
    renderBasketCardItem() {
        const basketCardItem = document.createElement('div')
        basketCardItem.classList.add('basket_card')
        basketCardItem.innerHTML = `
                <div class="basket_card__close" id=${this.id}>&times;</div>
                <img
                class="basket_card__img"
                src=${this.src}
                alt="#"
                />
                <p class="basket_card__title">
                ${this.description}
                </p>
                <div class="basket_card_count">
                <p class="items__control control_minus" data-action="minus">-</p>
                <p class="items__current" data-counter>${this.amount}</p>
                <p class="items__control control_plus" data-action="plus">+</p>
                </div>
                <div class="basket_card__price">${+(this.priceNow * this.amount).toFixed(2)}</div>
        `
        this.selector.append(basketCardItem);
    }
}
export class BasketCard{
    constructor(
        id,
        src,
        description,
        priceNow,
        selector
    ) {
        this.id = id;
        this.src = src;
        this.description = description;
        this.priceNow = priceNow;
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
                <div class="basket_card__price">${this.priceNow}</div>
        `
        this.selector.append(basketCardItem);
    }
}
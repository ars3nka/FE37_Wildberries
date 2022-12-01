const basketCount = document.querySelector('.basket_count');

export function userBasketCounter() {
    if (localStorage.getItem('userBasket')){
        const userBasketLocal = JSON.parse(localStorage.getItem('userBasket'))
        if (userBasketLocal.length > 0) {
            basketCount.classList.remove('modal__hide');
            basketCount.innerHTML = `<p class="basket_count_item">${userBasketLocal.length - 1}</p>`
        }
    } else if (sessionStorage.getItem('userBasket')) {
        const userBasketSession = JSON.parse(sessionStorage.getItem('userBasket'))
        if (userBasketSession.length > 0) {
            basketCount.classList.remove('modal__hide');
            basketCount.innerHTML = `<p class="basket_count_item">${userBasketSession.length - 1}</p>`
        }
    }
    else { 
    basketCount.classList.add('modal__hide');
}}

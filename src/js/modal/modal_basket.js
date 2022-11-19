import { getData } from "../service/service.js"

const modalBucketDiv = document.querySelector('.modal_basket');
const modalBasketWrapper = document.querySelector('#modal_basket');
const modalBasketClose = document.querySelector('.modal__basket_close');
const modalBashetOpen = document.querySelector('.header__basket');

const urlProductPath = 'https://6376795181a568fc25ffbb26.mockapi.io/products';

getData(urlProductPath)
    .then(products => {
        console.log(products);
        // products.forEach(product => modalBucketDiv.innerHTML = product)
    })

function toggleBasketModal(){
    modalBasketWrapper.classList.toggle('modal__hide');
    if (modalBasketWrapper.classList.contains('modal__hide')){
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
    }
};

modalBashetOpen.addEventListener('click', toggleBasketModal);
modalBasketClose.addEventListener('click', toggleBasketModal);

modalBasketWrapper.addEventListener('click', (e) => {
    if (e.target === modalBasketWrapper){
        toggleBasketModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape'){
        if (!modalBasketWrapper.classList.contains('modal__hide')){
        modalBasketWrapper.classList.add('modal__hide');    
        }
    }
});

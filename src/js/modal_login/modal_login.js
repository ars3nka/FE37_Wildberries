// Модалка авторизации 

const modalWrapper = document.querySelector('.modal__wrapper');
const modalOpenBtn = document.querySelector('.header__profile')
const modalCloseBtn = document.querySelector('.modal__close');
const phoneInput = document.querySelector('input[type = "phone"');
let inputPhoneMask = new Inputmask(' (99) 999-99-99');

inputPhoneMask.mask(phoneInput)

function toggleModal(){
    modalWrapper.classList.toggle('modal__hide');
    if(modalWrapper.classList.contains('modal__hide')){
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
    }
}

modalOpenBtn.addEventListener('click', toggleModal)
modalCloseBtn.addEventListener('click', toggleModal)
modalWrapper.addEventListener('click', (e) => {
    if(e.target === modalWrapper){
        toggleModal();
    }
})


//
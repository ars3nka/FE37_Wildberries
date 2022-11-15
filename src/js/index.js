// Модалка авторизации 

const modalWrapper = document.querySelector('.modal__wrapper');
const modalOpenBtn = document.querySelector('.header__profile')
const modalCloseBtn = document.querySelector('.modal__close');

function toggleModal(){
    modalWrapper.classList.toggle('modal__hide');
}

modalOpenBtn.addEventListener('click', toggleModal)
modalCloseBtn.addEventListener('click', toggleModal)
modalWrapper.addEventListener('click', (e) => {
    if(e.target === modalWrapper){
        toggleModal();
    }
})

//
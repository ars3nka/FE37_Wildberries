const search = document.querySelector('.header__search');

search.addEventListener('input', (e) => {
  let searchValue = e.target.value.trim().toLowerCase();
  let description = document.querySelectorAll('.goods_card__description');

  description.forEach((el) => {
    let descriptionValue = el.innerText.toLowerCase();
    if (descriptionValue.includes(searchValue)) {
      el.parentElement.parentElement.style.display = 'list-item';
    } else {
      el.parentElement.parentElement.style.display = 'none';
    }
  });
}); 
import { getData } from '../service/service.js';

const modalBucketDiv = document.querySelector('.modal_bucket');
const urlProductPath = 'https://6376795181a568fc25ffbb26.mockapi.io/products';

getData(urlProductPath).then((products) => {
  console.log(products);
  // products.forEach(product => modalBucketDiv.innerHTML = product)
});

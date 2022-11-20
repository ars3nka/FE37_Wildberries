import './modal/modal_login';
import './modal/modal_basket';
import './components/swiper';
import { getData } from './service/service';
import './Cards/Card.js';

const urlProductPath = 'https://6376795181a568fc25ffbb26.mockapi.io/products';
getData(urlProductPath).then((products) => {
  console.log(products);
});

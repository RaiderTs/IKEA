import {getData} from './getData.js'

const wishList = ['idd006', 'idd099', 'idd085', 'idd088'];

  const cardList = [
    { id: 'idd015', count: 3 },
    { id: 'idd025', count: 2 },
    { id: 'idd035', count: 1 },
    ];

export const loadData = () => {  

    if (location.search) {
        const search = decodeURI(location.search);
        console.log(search);
        // убираем лишние символы. Разбиваем на элементы, между ними стаыим равно. Стваим нужные  элементы в массив [], сплитим первый не правельный символ символ
        const prop = search.split('=')[0].slice(1);
        const value = search.split('=')[1];

        if (prop === 's') {
            console.log(value);
        } else if (prop === "wishlist") {
            console.log(wishList)
        } else {
            console.log(prop.hash);
        }
    }
    if (location.hash) {
        console.log(location.hash.slice(1));
    }
    if (location.pathname.includes('cart')) {
        console.log(cartList);
    }
};

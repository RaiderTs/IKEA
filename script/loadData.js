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
        // убираем лишние символы. Разбиваем на элементы, между ними стаыим равно. Стваим нужные  элементы в массив [], сплитим первый не правельный символ символ
        const prop = search.split('=')[0].slice(1);
        const value = search.split('=')[1];

        if (prop === 's') {
            getData.search(value, data => console.log(data));
        } else if (prop === "wishlist") {
            getData.wishList(wishList, (data) => console.dir({wishlist: data}))
        } else  if (prop === 'cat' || prop === 'subcat'){
            getData.category(prop, value, (data) => console.log(data))
        }
    }
    if (location.hash) {
        getData.item(location.hash.slice(1), (data) => console.log(data));
    }
    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

    // getData.catalog((data) => console.log(data));

    // getData.subCatalog('Декор', (data) => console.log(data));
    
};
 
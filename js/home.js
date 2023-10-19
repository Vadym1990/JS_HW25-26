const products = document.querySelector('.products');

const productsElements = [
    {
        img: 'essager.png',
        title: 'Кабель Essager usb-c для iphone 11, 12, 14, Pro, Max, Mini, Xs, Xr, X, 8, iPad, MacBook, с поддержкой быстрой зарядки PD 20 Вт',
        crystal: '650',
        coin: '650'
    },
    {
        img: 'acc.png',
        title: 'Внешний аккумулятор 2 выходных интерфейса 5 в 1200 мАч',
        crystal: '2100',
        coin: '2100'
    },
    {
        img: 'light-p.png',
        title: 'Портативный многофункциональный фонарь',
        crystal: '2000',
        coin: '2000'
    },
    {
        img: 'light-k.png',
        title: 'Карманный фонарик XP-G Q5 Zoom Focus Mini Led Flash, 2000 люмен',
        crystal: '500',
        coin: '500'
    },
    {
        img: 'marvel.jpg',
        title: 'Наклейки "Супергерои марвел"',
        crystal: '50',
        coin: '50'
    }

]

const productsItems = productsElements.map(function (item) {
    const randomNum = Math.floor(Math.random() * 11);
    return `<div class = "products__item">
                <img src = "img/${item.img}">
                <div>${item.title}</div>        
                <div>Доступно товаров: ${randomNum}</div>
                <div class = "products__buy-panel">
                    <div>
                        <div>${item.crystal}</div>
                        <img src = "img/ico/christal.png"> 
                    </div>
                    <div>
                        <div>${item.coin}</div>
                        <img src = "img/ico/coin.png">
                    </div>
                </div>
            </div>
            `
}).join('');

products.innerHTML = productsItems;
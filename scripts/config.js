const CURRENCY = "UAH";

const CURRENCY_EXCHANGE = {
    UAH: 1,
    USD: 27.85,
    RUB: 0.37,
    EUR: 33.38,
};

// const CURRENCY = "USD";
//
// const CURRENCY_EXCHANGE = {
//     UAH: 0.036,
//     USD: 1,
//     RUB: 0.013,
//     EUR: 1.2,
// };

const BASKET = {
    elements: 3,
    price: 2500,
};

const TOP_MENU = {
    catalog: {
        order: 1,
        title: "Каталог",
        submenu: [
            {
                order: 1,
                title: "VOIP оборудование",
                url: "voip_equipment.html",
            },
            {
                order: 2,
                title: "GSM оборудование",
                url: "gsm_equipment.html",
            },
            {
                order: 3,
                title: "Телефония",
                url: "gsm_equipment.html",
            },
            {
                order: 4,
                title: "Гарнитуры",
                url: "gsm_equipment.html",
            },
        ],
    },
    about_company: {
        order: 3,
        title: "О компании",
        submenu: [
            {
                order: 1,
                title: "VOIP оборудование",
                url: "voip_equipment.html",
            },
            {
                order: 3,
                title: "GSM оборудование",
                url: "gsm_equipment.html",
            },
            {
                order: 2,
                title: "Routers",
                url: "routers.html",
            },
        ],
    },
    payment_delivery: {
        order: 2,
        title: "Оплата и доставка",
        url: "payment_delivery.html",
    },
    garantiya_i_vozvrat_tovara: {
        order: 4,
        title: "Гарантия и возврат",
        url: "payment_delivery.html",
    },
    sotrudnichestvo: {
        order: 5,
        title: "Сотрудничество",
        url: "payment_delivery.html",
    },
    services: {
        order: 6,
        title: "Услуги",
        submenu: [
            {
                order: 1,
                title: "Настройка VoIP оборудования",
                url: "voip_equipment.html",
            },
            {
                order: 2,
                title: "Настройка IP АТС",
                url: "gsm_equipment.html",
            },
            {
                order: 3,
                title: "Аутсорсинг в области IP телефонии",
                url: "routers.html",
            },
        ],
    },
    support: {
        order: 7,
        title: "Техподдержка",
        url: "payment_delivery.html",
    },
    contacts: {
        order: 8,
        title: "Контакты",
        url: "payment_delivery.html",
    },
};

const MENU = [
    {
        order: 1,
        title: "VOIP ОБОРУДОВАНИЕ",
        url: "voip_equipment.html",
    },
    {
        order: 2,
        title: "SKYPE оборудование",
        url: "skype_equipment.html",
    },
    {
        order: 3,
        title: "GSM оборудование",
        url: "gsm_equipment.html",
    },
    {
        order: 4,
        title: "Гарнитуры",
        url: "video_equipment.html",
    },
    {
        order: 5,
        title: "Сетевое оборудование",
        url: "video_equipment.html",
    },
    {
        order: 6,
        title: "VIDEO оборудование",
        url: "video_equipment.html",
    },
    {
        order: 7,
        title: "Електронные замки",
        url: "video_equipment.html",
    },
    {
        order: 8,
        title: "Домофон",
        url: "video_equipment.html",
    },
    {
        order: 9,
        title: "Распродажа",
        url: "video_equipment.html",
    },
    {
        order: 10,
        title: "Распродажа 2",
        url: "video_equipment.html",
    },
    {
        order: 11,
        title: "Распродажа 3",
        url: "video_equipment.html",
    },
    {
        order: 12,
        title: "Распродажа 4",
        url: "video_equipment.html",
    },
];

const NEWS = [
    {
        date: "2021/01/01",
        title: "Новые телефоны Grandstream серии GRP2600",
        description:
            "Grandstream серии GRP2600 - это современные IP-телефоны операторского класса, которые были созданы для быстрого массового развёртывания.",
        img: "https://i.postimg.cc/2S3XnZ9C/Layer-766-1.jpg",
        url: "voip_equipment.html",
    },
    {
        date: "2020/12/25",
        title: "Новая прошивка для IP-телефонов Fanvil X5S/X6",
        description: "Новая прошивка для IP-телефонов Fanvil X5S/X6",
        img: "https://i.postimg.cc/2S3XnZ9C/Layer-766-1.jpg",
        url: "voip_equipment.html",
    },
    {
        date: "2021/01/14",
        title: "У нас открыт склад и пункт выдачи в Санкт Петербурге",
        description: "Открытие точки выдачи товаров в северной столице",
        img: "https://i.postimg.cc/2S3XnZ9C/Layer-766-1.jpg",
        url: "voip_equipment.html",
    },
    {
        date: "2021/01/01",
        title: "Новость для теста 1",
        description: "Тут не много описания",
        img: "https://i.postimg.cc/2S3XnZ9C/Layer-766-1.jpg",
        url: "voip_equipment.html",
    },
    {
        date: "2020/11/12",
        title: "Новость для теста 2",
        description: "Тут не много описания но текста чучуть по больше, что бы посмотреть как выводится",
        img: "https://i.postimg.cc/2S3XnZ9C/Layer-766-1.jpg",
        url: "voip_equipment.html",
    },
];

const BANNER = [
    {
        order: 1,
        img: "https://i.postimg.cc/rFXBTbk6/Layer-772-1.jpg",
        url: "voip_equipment.html",
    },{
        order: 3,
        img: "https://i.postimg.cc/rFXBTbk6/Layer-772-1.jpg",
        url: "voip_equipment.html",
    },{
        order: 2,
        img: "https://i.postimg.cc/rFXBTbk6/Layer-772-1.jpg",
        url: "voip_equipment.html",
    },
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
    {
        id: 1,
        type: "new",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "",
        price: 1000,
        oldPrice: 1100,
        currency: "UAH",
        date: "2021/01/01",
        url: "new_items/item1.html",
    },
    {
        id: 2,
        type: "new",
        description: "WiFi SIP телефон Grandstream WP820",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 9678.75,
        currency: "UAH",
        date: "2021/01/02",
        url: "new_items/item1.html",
    },
    {
        id: 3,
        type: "new",
        description: "Готовый комплект VEGATEL VT-900E/1800-kit (восстановленный)",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 14980,
        currency: "RUB",
        date: "2021/02/01",
        url: "new_items/item1.html",
    },
    {
        id: 4,
        type: "new",
        description: "1.3 Мп цилиндрическая IP-камера Milesight MS-C2163-FPN",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 4832.34,
        currency: "RUB",
        date: "2020/12/25",
        url: "new_items/item1.html",
    },
    {
        id: 5,
        type: "new",
        description: "2 Мп цилиндрическая IP-камера Milesight MS-C3363-FPN",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 150,
        currency: "USD",
        date: "2020/12/31",
        url: "new_items/item1.html",
    },
    {
        id: 6,
        type: "new",
        description: "Camera 1",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 4620.45,
        currency: "UAH",
        date: "2021/01/10",
        url: "new_items/item1.html",
    },
    {
        id: 7,
        type: "new",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "",
        price: 1000,
        oldPrice: 1100,
        currency: "UAH",
        date: "2021/01/10",
        url: "new_items/item1.html",
    },
    {
        id: 8,
        type: "new",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "",
        price: 1000,
        oldPrice: 1100,
        currency: "UAH",
        date: "2021/01/01",
        url: "new_items/item1.html",
    },
    {
        id: 9,
        type: "recommended",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        date: "2020/12/25",
        url: "new_items/item.html",
    },
    {
        id: 10,
        type: "recommended",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 300,
        oldPrice: 1100,
        currency: "RUB",
        date: "2020/12/25",
        url: "new_items/item.html",
    },
    {
        id: 11,
        type: "recommended",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 850.45,
        currency: "UAH",
        date: "2020/12/25",
        url: "new_items/item.html",
    },
    {
        id: 12,
        type: "recommended",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 150,
        currency: "USD",
        date: "2020/12/25",
        url: "new_items/item.html",
    },
    {
        id: 13,
        type: "sale",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 170,
        oldPrice: 210,
        currency: "EUR",
        date: "2021/01/13",
        url: "https://same_url/item.html",
    },
    {
        id: 14,
        type: "sale",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 170,
        oldPrice: 200,
        currency: "EUR",
        date: "2021/01/13",
        url: "https://same_url/item.html",
    },
    {
        id: 15,
        type: "sale",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 5300,
        oldPrice: 6000,
        currency: "UAH",
        date: "2021/01/13",
        url: "https://same_url/item.html",
    },
    {
        id: 16,
        type: "sale",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 5300,
        oldPrice: 6200,
        currency: "UAH",
        date: "2021/01/13",
        url: "https://same_url/item.html",
    },
    {
        id: 17,
        type: "sale",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 100,
        oldPrice: 200,
        currency: "USD",
        date: "2021/01/13",
        url: "https://same_url/item.html",
    },
    {
        id: 18,
        type: "sale",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        price: 180,
        oldPrice: 200,
        currency: "USD",
        date: "2021/01/13",
        url: "https://same_url/item.html",
    },
    {
        id: 19,
        type: "sale",
        description: "IP телефон Siemens Gigaset C530A IP",
        price: 3700,
        oldPrice: 5000,
        currency: "RUB",
        date: "2021/01/13",
        url: "https://same_url/item.html",
    },
];

const PROMOTIONS = [
    {
        title: "Название акции",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: 'https://i.postimg.cc/yNrPs1Fn/Layer-776.png',
        url: "https://same_url/item.html",
        time_action: "1d 2h 20m",
    },
    {
        title: "Название акции 2",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: 'https://i.postimg.cc/yNrPs1Fn/Layer-776.png',
        url: "https://same_url/item.html",
    },
    {
        title: "Название акции",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        url: "https://same_url/item.html",
        time_action: "5d 2h 20m",
    },
    {
        title: "Название акции 2",
        description: "IP телефон Siemens Gigaset C530A IP",
        img: "https://i.postimg.cc/yNrPs1Fn/Layer-776.png",
        url: "https://same_url/item.html",
    },
];

const BUYING_RIGHT_NOW = [
    {
        title: "Название товара 1",
        img: "https://i.postimg.cc/MKtFMSx2/Layer-793.png",
        url: "https://same_url/item.html",
    },
    {
        title: "Название товара 2",
        img: "https://i.postimg.cc/g0hsDF90/Layer-790.png",
        url: "https://same_url/item.html",
    },
    {
        title: "Название товара 3",
        img: "https://i.postimg.cc/s2zmwH39/Layer-791.png",
        url: "https://same_url/item.html",
    },
    {
        title: "Название товара 4",
        img: "https://i.postimg.cc/K8B3pZYC/Layer-792.png",
        url: "https://same_url/item.html",
    },
    {
        title: "Товар без картинки",
        img: "",
        url: "https://same_url/item.html",
    },
    {
        title: "Название товара 5",
        img: "https://i.postimg.cc/MKtFMSx2/Layer-793.png",
        url: "https://same_url/item.html",
    },
    {
        title: "Название товара 6",
        img: "https://i.postimg.cc/MKtFMSx2/Layer-793.png",
        url: "https://same_url/item.html",
    },
    {
        title: "Название товара 7",
        img: "https://i.postimg.cc/MKtFMSx2/Layer-793.png",
        url: "https://same_url/item.html",
    },
];


export {CURRENCY, CURRENCY_EXCHANGE, BASKET};
export {TOP_MENU, MENU, NEWS, BANNER};
export {ITEMS, PROMOTIONS, BUYING_RIGHT_NOW};
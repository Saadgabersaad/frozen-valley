

export interface Card {
    id: number;
    title: string;
    description:string;
    image: string;
    link?: string;
}
export interface Products {
    id: number;
    title: string;
    description: string;
    image: string;
    link?: string;
}




export const products : Card[] = [
    {
        id: 1,
        title: 'Cauliflower',
        description: 'Frozen cauliflower.',
        image: './products/cauliflower.png',
        link: '/products/vegetables/cauliflower'
    },
    {
        id: 2,
        title: 'Strawberry',
        description: 'Frozen Strawberry.',
        image: './products/Strawberry2.png',
        link: '/products/fruits/strawberry'   // ✅ Correct

    },
    {
        id: 3,
        title: 'Broccoli',
        description: 'Frozen Broccoli',
        image: './products/broccoli.png',
        link:'./products/vegetables/broccoli'

    }, {
        id: 4,
        title: 'Peas With Carrot',
        description: 'Frozen Peas With Carrot.',
        image: './products/peas with carrot.png',
        link:'./products/vegetables/strawberry'

    },
];

export const cards: readonly Products[] = [
    { id: 1, title: 'Strawberry', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/Strawberry2.png', link: '/products/fruits/strawberry' },
    { id: 2, title: 'Apricot', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/apricot.png', link: '/products/fruits/apricot' },
    { id: 3, title: 'Mango', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/mango2.png', link: '/products/fruits/mango' },
    { id: 4, title: 'Pomegranate', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/Pomegranate.png', link: '/products/fruits/pomegranate' },
    { id: 5, title: 'Cauliflower', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/cauliflower.png', link: '/products/vegetables/cauliflower' },
    { id: 6, title: 'Broccoli', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/broccoli.png', link: '/products/vegetables/broccoli' },
    { id: 7, title: 'Sweet Corn', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/corn.png', link: '/products/vegetables/sweet-corn' },
    { id: 8, title: 'French fries', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/fries.jpg', link: '/products/fries/french-fries' },
    { id: 9, title: 'Peas With Carrot', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/peas with carrot (1).png', link: '/products/vegetables/peas-with-carrot' },
    { id: 10, title: 'Okra', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/okra.png', link: '/products/vegetables/okra' },
    { id: 11, title: 'Mixed Vegetables', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/mixed vegetables.jpg', link: '/products/vegetables/mixed-vegetables' },
    { id: 12, title: 'Diced Onion', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/onion.jpg', link: '/products/vegetables/diced-onion' },
];




export const strawberry :readonly Card[] = [
    { id: 1, title: 'Strawberry', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/strawberry/frozenStrawberry3.jpg',  },
    { id: 2, title: 'Strawberry Pack', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/Strawberry2.png',  },
    { id: 3, title: 'Strawberry', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/strawberry/strawberry9.jpg',  },
    { id: 4, title: 'Strawberry', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/strawberry/frozenStrawberry4.jpg' },
    { id: 5, title: 'Strawberry', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/strawberry/strawberries6.jpg',  },
];

export const apricot :readonly Card[] = [
    { id: 1, title: 'Apricot', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/apricot/apricot1.jpg',  },
    { id: 2, title: 'Apricot', description: 'Quality You can Trust, Freshness You Can taste', image:'/images/apricot/apricot.png', },
    { id: 3, title: 'Apricot', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/apricot/Frozen Apricot.jpg',  },
    { id: 4, title: 'Apricot', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/apricot/apricot11.jpg', },
    { id: 5, title: 'Apricot', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/apricot/apricot10.jpg',  },

];
export const mango :readonly Card[] = [
    { id: 1, title: 'Mango Pack', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/mango/mango slice.jpg' },
    { id: 2, title: 'Mango', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/mango/mango2.png',  },
    { id: 3, title: 'Mango', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/mango/Frozen Mango.jpg' },
    { id: 4, title: 'Mango', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/mango/Mango Packs.jpg' },
    { id: 5, title: 'Mango', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/mango/Mango .jpg' },

];
export const cauliflower :readonly Card[] = [
    { id: 1, title: 'Cauliflower', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/cauliflower/cauliflower5.png',  },
    { id: 2, title: 'Cauliflower Pack', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/cauliflower/cauliflower.png',  },
    { id: 3, title: 'Cauliflower', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/cauliflower/colliflower2.jpg',  },
    { id: 4, title: 'Cauliflower', description: 'Quality You can Trust, Freshness You Can taste', image:'/images/cauliflower/colliflower2.jpg' },
    { id: 5, title: 'Cauliflower', description: 'Quality You can Trust, Freshness You Can taste', image:'/images/cauliflower/cauliflower4.jpg' },
];

export const broccoli: readonly Card[] = [
    { id: 1, title: 'Broccoli', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/broccoli/Frozen Broccoli 1.jpg' },
    { id: 2, title: 'Broccoli Pack', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/broccoli/broccoli.png' },
    { id: 3, title: 'Broccoli', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/broccoli/broccoli20.jpg' },
    { id: 4, title: 'Broccoli', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/broccoli/broccoli21.jpg' },
    { id: 5, title: 'Broccoli', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/broccoli/Frozen Broccoli.jpg' },
];

export const okra :readonly Card[] = [
    { id: 1, title: 'Okra', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/okra/okra3.jpg',  },
    { id: 2, title: 'Okra Pack', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/okra/okra.png' },
    { id: 3, title: 'Okra', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/okra/okra1.jpg',  },
    { id: 4, title: 'Okra', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/okra/Frozen Okra.jpg',  },
    { id: 5, title: 'Okra', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/okra/Okra2.jpg',  },
];


export const mixedVegetables :readonly Card[] = [
    { id: 1, title: 'Mixed Vegetables ', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/mixed-vegetables/mixed.jpg' },
    { id: 2, title: 'Mixed Vegetables Pack', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/mixed-vegetables/mixed vegetables.jpg',  },
    { id: 3, title: 'Mixed Vegetables', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/mixed-vegetables/mixed2.jpg',  },
    { id: 4, title: 'Mixed Vegetables', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/mixed-vegetables/mixed3.jpg',  },
    { id: 5, title: 'Mixed Vegetables', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/mixed-vegetables/mixed4.jpg',  },
];


export const frenchfries :readonly Card[] = [
    { id: 1, title: 'French fries', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/fries/frozen fries pack.jpg',  },
    { id: 2, title: 'French fries Pack', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/fries/fries.png',  },
    { id: 3, title: 'French fries', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/fries/frozen french fries2.jpg' },
    { id: 4, title: 'French fries', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/fries/frozen fries1 .jpg' },
    { id: 5, title: 'French fries', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/fries/fries3.jpg' }
];
export const sweetCorn :readonly Card[] = [
    { id: 1, title: 'Sweet Corn', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/sweet-corn/sweetcorn.jpg',  },
    { id: 2, title: 'Sweet Corn', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/corn.png',  },
    { id: 3, title: 'Sweet Corn', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/sweet-corn/sweetCorn1.jpg' },
    { id: 4, title: 'Sweet Corn', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/sweet-corn/sweetcorn2.jpg',  },
    { id: 5, title: 'Sweet Corn', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/sweet-corn/sweetcorn.jpg',  },
];

export const peasWithCarrot :readonly Card[] = [
    { id: 2, title: 'Peas With Carrot', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/peasWithCarrot/peas4.jpg' },
    { id: 1, title: 'Peas With Carrot Pack', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/peasWithCarrot/peas with carrot.png',  },
    { id: 3, title: 'Peas With Carrot', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/peasWithCarrot/peasWithCarrot2.jpg',  },
    { id: 4, title: 'Peas With Carrot', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/peasWithCarrot/peas2.jpg',  },
    { id: 5, title: 'Peas With Carrot', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/peasWithCarrot/peasWithCarrots.jpg',  },
];
export const dicedOnion :readonly Card[] = [
    { id: 1, title: 'Diced Onion', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/dicedOnion/diced.jpg'  },
    { id: 2, title: 'Diced Onion', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/dicedOnion/onion.jpg' },
    { id: 3, title: 'Diced Onion', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/dicedOnion/diced onion.jpg' },
    { id: 4, title: 'Diced Onion', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/dicedOnion/onions2.jpg',  },
    { id: 5, title: 'Diced Onion', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/dicedOnion/onions.jpg'  },
];

export const greenBeans :readonly Card[] = [
    { id: 1, title: 'Green Beans', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/greenBeans/greenbeans.jpg',  },
    { id: 2, title: 'Green Beans', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/greenBeans/green beans.png',  },
    { id: 3, title: 'Green Beans', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/greenBeans/greenbeans1.jpg' },
    { id: 4, title: 'Green Beans', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/greenBeans/greenbeans2.jpg',  },
    { id: 5, title: 'Green Beans', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/greenBeans/greenbeans3.jpg',  },
];
export const pomegranate :readonly Card[] = [
    { id: 3, title: 'Frozen Valley', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/pomegranate/pomegranate-top-view-with-knife-wooden-table.jpg' },
    { id: 2, title: 'Frozen Valley', description: 'Quality You can Trust, Freshness You Can taste', image: '/products/pomegranate.png',  },
    { id: 4, title: 'Frozen Valley', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/pomegranate/pomegranate 4.jpg',  },
    { id: 1, title: 'Frozen Valley', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/pomegranate/pomegranant3.jpg',  },
    { id: 5, title: 'Frozen Valley', description: 'Quality You can Trust, Freshness You Can taste', image: '/images/pomegranate/pomegranant1.jpg ',  },
];


import { Image } from 'react-native-feather'
import React from 'react'

export const categories = [
    {
        id: 1,
        name: "Pizza",
        image: require ('../images/icone-pizza.png')
    },
    {
        id: 2,
        name: "Hambúrguer",
        image: require('../images/icone-hamburger.png')
    },
    {
        id: 3,
        name: "Italiana",
        image: require('../images/icone-spaghetti.png')
    },
    {
        id: 4,
        name: "Sobremesas",
        image: require('../images/icone-cupcake.png')
    },
    {
        id: 5,
        name: "Japonesa",
        image: require('../images/icone-tropicalfish.png')
    },
    {
        id: 6,
        name: "Chinesa",
        image: require('../images/icone-takeoutbox.png')
    }
]

export const featured = {
    id:1,
    title: 'Restaurantes',
    description:'Frango macio e suculento',
    restaurants: [
        {
            id:1,
            name:'KFC',
            image:require('../images/KFC.webp'),
            description:'O melhor frango frito.',
            lng:-23.0230109,
            lat: -45.5851007,
            address: 'Taubaté Shopping',
            stars: 4,
            reviews: '1K',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Frango Frito',
                    description: 'Porçao média de frango frito',
                    price: 25,
                    image: require('../images/frango.jpeg') 
                },
                {
                    id: 2,
                    name: 'Chicken Burguer',
                    description: 'Hamburguer de frango frito',
                    price: 30,
                    image: require('../images/hamburguer.png') 
                },
                {
                    id: 3,
                    name: 'Balde de frango',
                    description: 'Porção grande de frango frito',
                    price: 35,
                    image: require('../images/baldefrango.jpeg')
                },
                
            ]
        },
        {
            id:2,
            name:'Kanpek',
            image:require('../images/kanpeak.jpg'),
            description:'O melhor Sushi',
            lng:-23.022694318353167,
            lat: -45.58184825767548,
            address: 'Taubaté Shopping',
            stars: 4,
            reviews: '4.0k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Guioza',
                    description: 'Porçao 5 unid',
                    price: 18,
                    image: require('../images/guioza.jpg') 
                },
                {
                    id: 2,
                    name: 'Frango Frito',
                    description: 'Porção média de frango frito',
                    price: 25,
                    image: require('../images/papa.jpg') 
                },
                {
                    id: 3,
                    name: 'Frango Frito',
                    description: 'Porção média de frango frito',
                    price: 25,
                    image: require('../images/papa.jpg')
                },
            ]
        },
        {
            id:3,
            name:'Montana',
            image:require('../images/montana.png'),
            description:'O melhor lanche.',
            lng:-23.022694318353167,
            lat: -45.58184825767548,
            address: 'Taubaté Shopping',
            stars: 4,
            reviews: '4.0k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Hamburguer Montana',
                    description: 'Hamburguer com onion rings',
                    price: 25,
                    image: require('../images/montana1.jpg') 
                },
                {
                    id: 2,
                    name: 'Porção',
                    description: 'Porção média',
                    price: 25,
                    image: require('../images/porcao.jpg') 
                },
                {
                    id: 3,
                    name: 'Chopp',
                    description: 'Torre de chopp',
                    price: 25,
                    image: require('../images/torre.png')
                },
            ]
        },],
    
}

export const res = {
    id:2,
    title: 'Ótimas opções',
    description:'Frango macio e suculento',
    restaurants: [
        {
            id:4,
            name:'Casona Açaí',
            image:require('../images/casona.png'),
            description:'O melhor lanche.',
            lng:-23.0313968,
            lat: -45.5933374,
            address: 'Avenida Independência, 697 - Loja 4',
            stars: 4,
            reviews: '3.0k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Açaí',
                    description: 'Açaí',
                    price: 10,
                    image: require('../images/acai-casadinho.jpg') 
                },
                {
                    id: 2,
                    name: 'Açaí',
                    description: 'Açaí',
                    price: 15,
                    image: require('../images/acai-nutella.jpg') 
                },
                {
                    id: 3,
                    name: 'Açaí',
                    description: 'Açaí',
                    price: 12,
                    image: require('../images/acai-twix.jpg')
                },
            ]
        },
        {
            id:5,
            name:'Patroni',
            image:require('../images/patroni.png'),
            description:'A melhor pizza.',
            lng:-23.022694318353167,
            lat: -45.58184825767548,
            address: 'Taubaté Shopping',
            stars: 4,
            reviews: '4.1k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'Pizza',
                    price: 30,
                    image: require('../images/pizza2.jpg') 
                },
                {
                    id: 2,
                    name: 'Pizza',
                    description: 'Pizza',
                    price: 35,
                    image: require('../images/pizza3.jpg') 
                },
                {
                    id: 3,
                    name: 'Pizza',
                    description: 'Pizza',
                    price: 36,
                    image: require('../images/pizza2.jpg')
                },
                
            ]
        },
        {
            id:6,
            name:'Toasted',
            image:require('../images/toasted.jpg'),
            description:'A melhor batata recheada.',
            lng:-23.022694318353167,
            lat: -45.58184825767548,
            address: 'Taubaté Shopping',
            stars: 4,
            reviews: '3.1k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 30,
                    image: require('../images/potato1.jpg') 
                },
                {
                    id: 2,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 35,
                    image: require('../images/potato2.jpg') 
                },
                {
                    id: 3,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 36,
                    image: require('../images/potato3.jpg')
                },
                
            ]
        },
    ],
}

export const odio = {   
    id:3,
    title: 'Experimente',
    description:'Novas opções',
    restaurants: [
        {
            id:7,
            name:'Divino fogão',
            image:require('../images/divino.jpeg'),
            description:'O melhor da comida caseira.',
            lng:-23.022694318353167,
            lat: -45.58184825767548,
            address: 'Taubaté Shopping',
            stars: 4,
            reviews: '3.1k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 30,
                    image: require('../images/potato1.jpg') 
                },
                {
                    id: 2,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 35,
                    image: require('../images/potato2.jpg') 
                },
                {
                    id: 3,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 36,
                    image: require('../images/potato3.jpg')
                },
                
            ]
        },
        {
            id:8,
            name:'Spoletto',
            image:require('../images/spoleto_1610030226.jpg'),
            description:'As melhores massas.',
            lng:-23.022694318353167,
            lat: -45.58184825767548,
            address: 'Taubaté Shopping',
            stars: 4,
            reviews: '3.1k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 30,
                    image: require('../images/potato1.jpg') 
                },
                {
                    id: 2,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 35,
                    image: require('../images/potato2.jpg') 
                },
                {
                    id: 3,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 36,
                    image: require('../images/potato3.jpg')
                },
                
            ]
        },
        {
            id:9,
            name:'Griletto',
            image:require('../images/griletto.png'),
            description:'A melhor batata recheada.',
            lng:-23.022694318353167,
            lat: -45.58184825767548,
            address: 'Taubaté Shopping',
            stars: 4,
            reviews: '3.1k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 30,
                    image: require('../images/potato1.jpg') 
                },
                {
                    id: 2,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 35,
                    image: require('../images/potato2.jpg') 
                },
                {
                    id: 3,
                    name: 'Batata recheada',
                    description: 'Batata recheada',
                    price: 36,
                    image: require('../images/potato3.jpg')
                },
                
            ]
        },
    ],
}
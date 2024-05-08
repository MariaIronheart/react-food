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
    title: 'Hot and Spicy',
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
            image:require('../images/papa.jpg'),
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
                    name: 'Frango Frito',
                    description: 'Porçao média de frango frito',
                    price: 25,
                    image: require('../images/papa.jpg') 
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
        }
    ]
}
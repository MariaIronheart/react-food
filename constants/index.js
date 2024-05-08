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
        image: require('../images/hamburguer.js')
    },
    {
        id: 3,
        name: "Italiana",
        image: require('../images/icone-pizza.png')
    },
    {
        id: 4,
        name: "Árabe",
        image: require('../images/icone-pizza.png')
    },
    {
        id: 5,
        name: "Japonesa",
        image: require('../images/icone-pizza.png')
    },
    {
        id: 6,
        name: "Carnes",
        image: require('../images/icone-pizza.png')
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
                    name: 'Frango Frito',
                    description: 'Porção média de frango frito',
                    price: 25,
                    image: require('../images/frango.jpeg') 
                },
                {
                    id: 3,
                    name: 'Frango Frito',
                    description: 'Porção média de frango frito',
                    price: 25,
                    image: require('../images/frango.jpeg')
                },
                
            ]
        },
        {
            id:2,
            name:'Kanpek',
            image:require('../images/papa.jpg'),
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
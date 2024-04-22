export const categories = [
    {
        id: 1,
        name: "Pizza",
        image: require('../assets/images/pizza.png')
    },
    {
        id: 2,
        name: "Hambúrguer",
        image: require('')
    },
    {
        id: 3,
        name: "Macarrão",
        image: require('')
    },
    {
        id: 4,
        name: "Lámen",
        image: require('')
    },
    {
        id: 5,
        name: "Porção",
        image: require('')
    },
    {
        id: 6,
        name: "Peixe",
        image: require('')
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
            image:require('../assets/images/'),
            description:'O melhor frango frito.',
            lng:-23.022694318353167,
            lat: -45.58184825767548,
            address: 'Taubaté Shopping',
            starts: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Frango Frito',
                    description: 'Porçao média de frango frito',
                    price: 25,
                    image: require('') 
                },
                {
                    id: 2,
                    name: 'Frango Frito',
                    description: 'Porção média de frango frito',
                    price: 25,
                    image: require('') 
                }
                
            ]
        }
    ]
}
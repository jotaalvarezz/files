const products = [{
    id: 'root',
    children: [{
            id: 'fruits',
            label: 'frutas',
            children: [{
                    id: 'apple',
                    label: 'Manzana',
                    children: [{
                            id: 'green',
                            label: 'Manzana Verde'
                        },
                        {
                            id: 'red',
                            label: 'Manzana Roja'
                        },
                        {
                            id: 'Reineta',
                            label: 'Manzana Amarilla'
                        }
                    ]
                },
                {
                    id: 'pear',
                    label: 'Pera'
                },
                {
                    id: 'pineapple',
                    label: 'Piña'
                },
                {
                    id: 'orange',
                    label: 'Naranja'
                }
            ]
        },
        {
            id: 'vegetables',
            label: 'Vegetales',
            children: [{
                    id: 'onion',
                    label: 'Cebolla'
                },
                {
                    id: 'tomatoes',
                    label: 'Tomate'
                },
                {
                    id: 'lettuce',
                    label: 'Lechuga'
                },
                {
                    id: 'spinach',
                    label: 'Espinaca'
                }
            ]
        }
    ]
}]

export default { products }
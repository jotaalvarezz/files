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
                    label: 'Pera',
                    file:'.pdf'
                },
                {
                    id: 'pineapple',
                    label: 'Piña',
                    file:'.pdf'
                },
                {
                    id: 'orange',
                    label: 'Naranja',
                    file:'.pdf'
                }
            ]
        },
        {
            id: 'vegetables',
            label: 'Vegetales',
            children: [{
                    id: 'onion',
                    label: 'Cebolla',
                    file:'.pdf'
                    
                },
                {
                    id: 'tomatoes',
                    label: 'Tomate',
                    file:'.pdf'
                },
                {
                    id: 'lettuce',
                    label: 'Lechuga',
                    file:'.pdf'
                },
                {
                    id: 'spinach',
                    label: 'Espinaca',
                    file:'.pdf'
                }
            ]
        }
    ]
}]

export default { products }
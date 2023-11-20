const orders = [
    {
        date: '2022-01-15',
        subtotal: 20.6,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'Product 1 Description',
                    price: 10.3,
                },
                quantity: 2
            },
        ],
    },
];

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders,
}
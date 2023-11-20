const products = [
    {
        id: 'redshoe',
        description: 'Product 1 Description',
        price: 19.99,
        reviews: []
    },
    {
        id: 'blujean',
        description: 'Product 2 Description',
        price: 29.99,
        reviews: []
    },
];

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    });
}

function getProductsById(id) {
    return products.find((product) => product.id == id)
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    };

    products.push(newProduct);
    return newProduct;
}

function addNewReview(id, rating, comment) {
    const productReviews = getProductsById(id).reviews;
    const newReview = {
        rating,
        comment
    };
    productReviews.push(newReview);
    return newReview;
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductsById,
    addNewProduct,
    addNewReview,
}
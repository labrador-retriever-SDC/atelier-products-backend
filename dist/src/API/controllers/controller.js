var controller = {
    getProducts: function (query) {
        console.log('Page:', parseInt(query.page), 'Count', parseInt(query.count));
        // query db async
        // return data
    },
    getProductInfo: function (productId) {
        console.log('You are requesting product info for product #', productId);
    },
    getProductStyles: function (productId) {
        console.log('You are requesting styles for product #', productId);
    },
    getRelatedProducts: function (productId) {
        console.log('You are requesting related products for product #', productId);
    }
};
export default controller;
//# sourceMappingURL=controller.js.map
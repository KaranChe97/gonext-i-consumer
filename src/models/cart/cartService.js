const Cart = require('./cartModal');

const cartService = {}; 

cartService.createOne = (id, data) => Cart.update({customerId: id}, data, { "upsert": true });

cartService.getAll = (condition) => Cart.find(condition).exec();

cartService.getOne = (id) => Cart.findOne({ customerId : id }).populate('cart.organizationID', 'company address phonenumber profilePic companyId').populate('cart.products.productID', 'name photos description');

cartService.delete = (id) => Cart.deleteMany({ customerId : id });

module.exports = cartService;
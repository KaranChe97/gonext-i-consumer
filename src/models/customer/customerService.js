const Customer = require('./customerModal');

const customerService = {};

customerService.createOne = (data) => Customer.create(data);

customerService.getAll = () => Customer.find({}).exec();

customerService.getOne = (id) => Customer.findById(id);

customerService.delete = (id) => Customer.findByIdAndDelete(id);

module.exports = customerService;
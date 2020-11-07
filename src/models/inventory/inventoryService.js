const inventory = require("./inventoryModel");

const inventoryService = {};

inventoryService.getAll = (id) => inventory.find({organizationID: id}).populate('category');


module.exports = inventoryService; 
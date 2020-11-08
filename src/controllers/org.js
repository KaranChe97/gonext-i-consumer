const mongoose = require('mongoose')
const categoryService = require('../models/categories');
const inventoryService = require('../models/inventory');
const Admins = require('../models/admin/index');
const org = {};


org.getAll = async (req,res,next) => {
    try{     
        let listOfOrg = await Admins.find({ role: 'admin' }, "company address phonenumber profilePic companyId");
        if(listOfOrg && listOfOrg.length) {
            res.status(200).json({
                status: 1,
                message: "success",
                stores: listOfOrg
            })
        }
    } catch(e) {
        next(e);
    }
}


org.getStore = async (req, res, next) => {
    try {
        const { companyId } = req.params; 
        if(!companyId) {
            throw new Error('Company Id is not passed');
        }
        var id = mongoose.Types.ObjectId(companyId);

        const storeDetails = await Admins.findOne({ _id:id }, "company address phonenumber profilePic companyId");

        if(!storeDetails) {
            return res.json({
                status: 2,
                message: 'Cannot find store'
            })
        }

        const products = await inventoryService.getAll(companyId);
        const categories = await categoryService.getAll({"orgId": id});
        
        return res.json({
            status: 1,
            message: "success",
            storeDetails,
            products,
            categories
        })
    } catch(e) {
        next(e);
    }

} 


module.exports = org;
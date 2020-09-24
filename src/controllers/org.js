const mongoose = require('mongoose')

const org = {};


org.getAll = async (req,res,next) => {
    try{
        const DB = await mongoose.connection.db;
        const admins = DB.collection('admins');
        const requiredFields = {
            "company": 1, 
            "address": 1, 
            "phonenumber": 1, 
            "profilePic": 1 ,
            "companyId": 1
        }
        let listOfOrg = await admins.find({ role: 'admin' }).project(requiredFields).toArray();
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
        const DB = await mongoose.connection.db;
        const { companyId } = req.params; 
        let storeDetails;
        if(!companyId) {
            throw new Error('Company Id is not passed');
        }
        const admins = DB.collection('admins');
        const inventory = DB.collection('inventories');
        var id = mongoose.Types.ObjectId(companyId);
        const requiredFields = {
            "company": 1, 
            "address": 1, 
            "phonenumber": 1, 
            "profilePic": 1,
            "companyId": 1
        }
        const adminDetails = await admins.find({ _id:id}, requiredFields).project(requiredFields).toArray();

        if(!adminDetails.length) {
            return res.json({
                status: 2,
                message: 'Cannot find store'
            })
        }

        const products = await inventory.find({ "organizationID": companyId }).toArray();

        if(adminDetails) {
            storeDetails = adminDetails[0];
        }

        return res.json({
            status: 1,
            message: "success",
            storeDetails,
            products
        })
    } catch(e) {
        next(e);
    }

}


module.exports = org;
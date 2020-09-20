const org = {};
import mongoose from "mongoose";


org.getAll = async( req,res,next) => {
    try{
        const admins = mongoose.connection.db.collection('admins');
        const requiredFields = {
            "company": 1, 
            "address": 1, 
            "phonenumber": 1, 
            "profilePic": 1 
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



module.exports = org;
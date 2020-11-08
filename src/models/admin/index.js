const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    name : {
        type : String
    },
    companyId: {
        type: String
    },
    phonenumber : {
        type : String
    },
    password : { 
        type : String
    }, 
    company: {
        type : String 
    },
    companyTags: [{
        type: mongoose.ObjectId, ref: 'tags'
    }], 
    address : { 
        type : String
    },
    profilePic : {
        type : String
    },
    role : {
        type : String,
        enum : ["superAdmin","admin","user"] 
    },
    verified : {
        type : Boolean
    } 
    },{        
        timestamps : true
});


module.exports = mongoose.model("admin",adminSchema);
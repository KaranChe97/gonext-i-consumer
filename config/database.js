require('dotenv').config();
const mongoose = require("mongoose");
const url = process.env.DB;
console.log("Establish new connection with url", url);
mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(url,(err) => {
    if (!err) { 
        console.log('DB connection created successfully');
    } else {
        console.log('error in creating DB connection', err);
    } 
});


module.exports = mongoose;
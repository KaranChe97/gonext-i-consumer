const CustomerService = require('../models/customer');

const Customer = {};

Customer.getAll = async (req, res, next) => {
    try {
        const customers = await CustomerService.getAll();

        res.status(200).json({
            status: 1,
            data: customers
        })
        
    } catch(e) {
        next(e);
    }
}
 
Customer.addOne  = async (req,res,next) => {
    try {
        console.log("called customer api");
        const {name} = req.body;
        console.log(req.body);
        if(!name) {
            return res.status(200).json({
                status: 2,
                message: 'Name is empty' 
            })
        } 

        const customer = await CustomerService.createOne({name});
        if(customer) {
            const customers = await CustomerService.getAll();
            res.status(200).json({
                status: 1,
                message: "successfully created",
                data: customers
            })
        }
    
    } catch(e) {
        next(e);
    }
}

module.exports = Customer;
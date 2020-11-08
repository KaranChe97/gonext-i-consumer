const mongoose = require('mongoose');   
const cartService = require('../models/cart');

const Cart = {};

Cart.getAll = async (req,res,next) => {
    try {
        const cart = await cartService.getAll({});

        res.status(200).json({
            status: 1,
            message: 'success',
            data: cart
        })
        
    } catch(e) {
        next(e);
    }
}


Cart.getOne = async (req, res, next) => {
    try {
        const { customerId } = req.params;
        if(!customerId) {
            return res.status(200).json({
                status: 2,
                message: 'customer id is mandatory',
            })
        } 
        const cart = await cartService.getOne(mongoose.Types.ObjectId(customerId));
        res.status(200).json({
            status: 1,
            message: 'success',
            data: cart
        })

    } catch(e) {
        next(e);
    }
}

Cart.create = async (req, res, next) => {
    try {
        const { customerId } = req.body;
        if(!customerId) {
            return res.status(200).json({
                status: 2,
                message: 'customer id is mandatory',
            })
        }
        const cart = await cartService.createOne( customerId, req.body);
        if(cart) {
            let cartData = await cartService.getOne(mongoose.Types.ObjectId(customerId));
            res.status(200).json({
                status: 1,
                message: 'success',
                data: cartData
            })
        }

    } catch(e) {
        next(e);
    }
}

Cart.deleteOne = async(req,res,next) => {
    try {

        const { customerId } = req.params;
        if(!customerId) {
            return res.status(200).json({
                status: 2,
                message: 'customer id is mandatory',
            })
        } 

        let cart = await cartService.delete(customerId);
        if(cart) {
            res.status(200).json({
                status: 1,
                message: 'successfully deleted',
            })
        }
    } catch(e) {
        next(e)
    }
}

module.exports = Cart;
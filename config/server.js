import express from "express";
import bodyParser from "body-parser";
const server = express();
const cors = require('cors'); 
const router = require('../src/routes');

server.use(cors());
server.use(express.static('public'))   
server.use(bodyParser.raw({ limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    next();
});

server.use('/api', router);

server.use((req, res, next) => {
    const error = new Error('Route Not Found');
    error.status = 400;
    next(error);
});

// eslint-disable-next-line no-unused-vars
server.use((e, req, res, next) => {
    e.status = e.status || 500;
    e.message = e.message || 'server error ';
    console.log( " server error === ",e);
    res.status(e.status).json({
        status: e.errCode || false,
        message: e.message,
        error: e,
    });
});

server.use(bodyParser.json());

export default server;
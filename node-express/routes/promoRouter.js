const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.use((req , res , next) => {
    res.statusCode = 200;
    res.setHeader('content-Type' , 'text/plain');
    next();
})
.get('/' , (req,res) => {
    res.end('will send you the promotions');
})
.get('/:promoId' , (req,res) => {
     res.end('Will send details of the promotions: ' + req.params.promoId +' to you!');
})
.post('/' , (req,res) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.post('/:promoId' , (req,res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put('/', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.put('/:promoId', (req, res) => {
    res.write('Updating the promotions: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete('/', (req, res) => {
    res.end('Deleting all promotions');
})
.delete('/:promoId', (req, res) => {
    res.end('Deleting promotion: ' + req.params.promoId);
})

module.exports = promoRouter;


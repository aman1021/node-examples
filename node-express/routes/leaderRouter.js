const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.use((req , res , next) => {
    res.statusCode = 200;
    res.setHeader('content-Type' , 'text/plain');
    next();
})
.get('/' , (req,res) => {
    res.end('will send you the names of the leaders');
})
.get('/:leaderId' , (req,res) => {
     res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
})
.post('/' , (req,res) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.post('/:leaderId' , (req,res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
})
.put('/', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.put('/:leaderId', (req, res) => {
    res.write('Updating the leaders: ' + req.params.leaderId + '\n');
    res.end('Will update the leaders: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete('/', (req, res) => {
    res.end('Deleting all leaders');
})
.delete('/:leaderId', (req, res) => {
    res.end('Deleting leaders: ' + req.params.leaderId);
})

module.exports = leaderRouter;


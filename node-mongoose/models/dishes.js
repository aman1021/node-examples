const mongoose = require('mongoose');
const Schema = mongoose.Schema; //  capital s

var commentSchema = new Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    comments:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    date: { type: Date, default: Date.now }, // timestamps wali backchodi se th acha h.
});
var dishSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    comments:[commentSchema],
    date: { type: Date, default: Date.now },
});

var Dishes = mongoose.model('Dish' , dishSchema);

module.exports=Dishes;  // mera wala code coursera wala se shi h
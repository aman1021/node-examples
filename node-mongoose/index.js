const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/confusion';

const connect = mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify:false });// eastablish connetion

connect.then((db) => {
    console.log('conneted correctly to server');

    Dishes.create({
       
        description:"student"
    })
    .then((Dish) => {
        console.log(Dish);   //dish or dishes if u write dish it will automatically accepts the plural form (mongoose).see the lecture 1
        return Dishes.findByIdAndUpdate(Dish._id , {
            $set : {description : "updated student"}
        },{
            new : true
        }).exec();
    })
    .then((Dish) => {
        console.log(Dish);
        Dish.comments.push({
            rating:5,
            comments:"a good student",
            author:"Akshay Kumar"
        });
        return Dish.save();
    })
    .then((Dish) => {
        console.log(Dish);
        return Dishes.deleteOne();
    })
    .then(() => {
        return mongoose.connection.close();
})
.catch((err) => {
    console.log(err);
});
}); // mera wala code coursera wala se shi h
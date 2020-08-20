const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const dbname = 'confusion';
const dboper = require('./operations');


//to acces the server we will say.
MongoClient.connect(url ).then((client) => {
    
    console.log('connected to server correctly');
    const db = client.db(dbname); // to connect to database.

    dboper.insertDocument(db , {name:"aman",age:21},'dishes')
    .then((result) => {
        console.log('insert document:\n ' , result.ops);
    
        return dboper.findDocuments( db , 'dishes' );
    })
    .then((docs) => {
        console.log('found document:\n ' , docs);

        return dboper.updateDocument(db , {name:"aman"},{age:22} , 'dishes' );
    })
    .then ((result) => {
        console.log('updated document:\n ', result.result);

        return dboper.findDocuments( db , 'dishes');
    })
    .then((docs) => {
        console.log('found updated document:\n ' , docs);

        return db.dropCollection( 'dishes'); //db is the collection.
    })
    .then ((result) => {
        console.log('Dropped collection ', result);
        client.close();
    })
    .catch((err) => console.log(err));

})
.catch((err) => console.log(err));
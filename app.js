// jshint esversion:6

// start MongoDB
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL port always 27017
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'fruitsDB';

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Use connect method to connect to the Server
// client.connect(function(err) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     // insertDocuments(db, function() {
//     findDocuments(db, function() {
//         client.close();
//     });
// });

// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Insert some documents
//     collection.insertMany([{
//             name: 'Apple',
//             rating: 8,
//             review: 'Greate fruit'
//         },
//         {
//             name: 'Orange',
//             rating: 6,
//             review: 'Kinda sour'
//         },
//         {
//             name: 'Banana',
//             rating: 9,
//             review: 'Great stuff!'
//         }
//     ], function(err, result) {
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// }

// const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Find some documents
//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(fruits)
//         callback(fruits);
//     });
// }

// end MongoDB

// Start Mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: 'Apple',
    rating: 10,
    review: 'So good!'
});

fruit.save

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([{
            name: 'Apple',
            rating: 8,
            review: 'Greate fruit'
        },
        {
            name: 'Orange',
            rating: 6,
            review: 'Kinda sour'
        },
        {
            name: 'Banana',
            rating: 9,
            review: 'Great stuff!'
        }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits)
        callback(fruits);
    });
}
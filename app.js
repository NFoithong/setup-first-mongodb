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
    name: {
        type: String,
        required: [true, 'Please provide fruit name']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: 'Apple',
    rating: 10,
    review: 'So good!'
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: 'John',
    age: 39
});

// person.save();

const kiwi = new Fruit({
    name: 'Kiwi',
    rating: 9,
    review: 'Loveeeeeeely'
});

const orange = new Fruit({
    name: 'Orange',
    rating: 9,
    review: 'Loveeeeeeely'
});

const banana = new Fruit({
    name: 'Banana',
    rating: 4,
    review: 'Nahhhh'
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully saved all fruits')
//     }
// });

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        // console.log(fruits);
        // mongoose.connection.close();

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});

// update - Fruit.updateOne({condition, (callback function)})

Fruit.updateOne({ _id: '6238ed939ee53b5e50132c17' }, { name: 'Pineapple' }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Succesfully updated');
    }
});


// delete
// Fruit.deleteOne({ name: 'Banana' }, function(err) {
//     if (err => console.log(err));
//     console.log('Succesfully deleted')
// });

// delete name: person collection
Person.deleteMany({ name: 'John' }, function(err) {
    if (err => console.log(err));
    console.log('Succesfully deleted')
});


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
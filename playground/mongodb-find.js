// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b5fb88968d5b1251b27b616')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Marky'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Error, unable to complete', err);
  });

  // db.close();
});

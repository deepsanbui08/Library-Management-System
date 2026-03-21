const mongoose = require('mongoose')
require('dotenv').config()

const mongo_url = process.env.MONGO_URI

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('Mongodb connected....')
    }).catch((err)=>{
        console.log('Mongodb connection error....',err)
    })

const db = mongoose.connection;

db.on('disconnected', () => {
  console.log('MongoDB server disconnected');
});

module.exports = db;
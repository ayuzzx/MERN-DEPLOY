const mongoose = require ("mongoose");

var mongoURL = 'mongodb+srv://ayuzzx:ayuzzx@cluster0.leq42.mongodb.net/mern-food'
mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , () => {
    console.log ('Mongo DB Connection Succcesfull');

})

db.on('error' , () => {
    console.log ('Mongo DB Connection Failed');

})

module.exports =mongoose
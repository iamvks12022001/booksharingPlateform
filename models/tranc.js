const mongoose=require('mongoose');

const trancSchema= new mongoose.Schema({
   
    bookname:{
        type :String,
        required :true
        
    },
    Ownername:{
        type :String,
        required :true
        
    },
    about:{
        type :String,
        required :true
    },
    roomNo:{
        type :String,
        required :true
        
    },
    price:{
        type :String,
        required :true
    }

},{
    timestamp: true  // to basically give info like created at ,updated at

});

const buy = mongoose.model('buy',trancSchema);
module.exports=buy;
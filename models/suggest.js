const mongoose=require('mongoose');

const suggest= new mongoose.Schema({
    firstname:{
        type :String,
        required :true
        
    },
    lastname:{
        type :String,
        required :true
        
    },
    email:{
        type :String,
        required :true,
        unique :true
    },
    
    suggest:{
        type :String,
        required :true
        
    }

},{
    timestamp: true  // to basically give info like created at ,updated at

});

const su = mongoose.model('suggest',suggest);
module.exports=su;
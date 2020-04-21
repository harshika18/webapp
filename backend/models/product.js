const mongoose = require('mongoose');

let Product = new mongoose.Schema({
    username:{
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    is_dispatch: {
        type: Number
    },
    quantity_remain: {
        type: Number
    } 
    
});

module.exports = mongoose.model('Product', Product);
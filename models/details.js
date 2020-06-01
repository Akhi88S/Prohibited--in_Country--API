var mongoose = require('mongoose');

var detailSchema = new mongoose.Schema({
    Country: {
        type: String,
        required: 'Name cannot be blank!'
    },
    Allowed: [{
        type: String,
        required: 'Allowed cannot be blank!'
    }],
    Notallowed: [{
        type: String,
        required: 'Not Allowed cannot be blank!'
    }],
    Additionalinfo: [{
        type: String,
        required: 'Not Allowed cannot be blank!'
    }],
    Otherinfo: [{
        type: String,
        required: 'Not Allowed cannot be blank!'
    }]
    
});

var Details = mongoose.model('Details', detailSchema);

module.exports = Details;

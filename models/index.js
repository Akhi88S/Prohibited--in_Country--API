var mongoose = require('mongoose');
mongoose.set('debug', true);
//mongoose.connect('mongodb://localhost/contapi',{ useNewUrlParser: true, useUnifiedTopology: true  });

mongoose.connect("mongodb+srv://Akhil:1@cluster0-cuvh1.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true });
mongoose.Promise = Promise;

module.exports.details = require("./details");

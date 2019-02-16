var mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/flights',
    {useNewUrlParser: true}

);

var db = mongoose.connection;

db.on('connected', function() {
    console.log('Connected to  mongodb at ${db.host}:${db.port}');
});
const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://eboac12070:YTUMd7o3ikaN7jR0@cluster0.ctkpy9j.mongodb.net/Hotels';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', function() {
    console.log('Connected to MongoDB');
    });

module.exports = mongoose;
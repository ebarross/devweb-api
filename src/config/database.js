const mongoose = require('mongoose');

mongoose.Promise = Promise;

module.exports = () => {
    mongoose.connect('mongodb://localhost/test', { useFindAndModify: false, useNewUrlParser: true })
        .then((result) => console.log(`MongoDB succesfully connected to database ${result.connection.db.databaseName}`))
        .catch(err => console.error('Could not connect to MongoDB...', err));
}
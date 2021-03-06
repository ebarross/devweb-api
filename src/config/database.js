const mongoose = require('mongoose');

mongoose.Promise = Promise;

module.exports = () => {
    mongoose.set('useFindAndModify', false);
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
        .then((result) => console.log(`MongoDB succesfully connected to database ${result.connection.db.databaseName}`))
        .catch(err => console.error('Could not connect to MongoDB...', err));
}
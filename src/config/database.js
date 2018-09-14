const mongoose = require('mongoose');
const MongodbMemoryServer = require('mongodb-memory-server');

const mongoServer = new MongodbMemoryServer.MongoMemoryServer();

mongoose.Promise = Promise;

module.exports = function () {
    mongoServer.getConnectionString().then((mongoUri) => {
        const mongooseOpts = {
            autoReconnect: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 1000
        };

        mongoose.connect(mongoUri, mongooseOpts);

        mongoose.connection.on('error', (e) => {
            if (e.message.code === 'ETIMEDOUT') {
                console.log(e);
                mongoose.connect(mongoUri, mongooseOpts);
            }
            console.log(e);
        });

        mongoose.connection.once('open', () => {
            console.log(`MongoDB succesfully connected to ${mongoUri}`);
        });
    });
}
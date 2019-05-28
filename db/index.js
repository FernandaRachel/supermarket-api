const mongoose = require('mongoose');
const logger = require('../config/logger.config')();
const URL_CONNECTION = process.env.MONGOLAB_URI &&
    process.env.NODE_ENV != 'development' ? process.env.MONGOLAB_URI : "mongodb://localhost/supermarket"

logger.info(`MONGOLAB_URI: ${process.env.MONGOLAB_URI}`);
logger.info(`NODE_ENV: ${process.env.NODE_ENV}`);

module.exports = function() {
    mongoose
        .connect(URL_CONNECTION, { useNewUrlParser: true });

    var db = mongoose.connection //saving connection do db

    db.on('error', () => {
        logger.info('Connection Error');
        console.error.bind(console, 'connection error')
    })
    db.on('open', () => {
        logger.info('Database connected');
    })
}
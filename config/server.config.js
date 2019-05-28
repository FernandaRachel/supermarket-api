const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const load = require('express-load'); // expose dependencies to application
const logger = require('../config/logger.config')();

module.exports = function() {
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json({
        type: 'application/json'
    }));


    app.listen(3001, () => logger.info('Application started !'));
    // app.get('/', (req, res) => res.send('Ola'));

    load('routes', {
        cwd: 'products-api'
    }).into(app);


    return app;
}
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var load = require('express-load'); // expose dependencies to application

module.exports = function() {
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json({
        type: 'application/json'
    }));


    app.listen(3001, () => console.log('Application started !'));
    // app.get('/', (req, res) => res.send('Ola'));

    load('routes', {
        cwd: 'products-api'
    }).into(app);

    return app;
}
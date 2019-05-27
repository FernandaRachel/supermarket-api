var mongoose = require('mongoose');

module.exports = function() {
    mongoose
        .connect('mongodb://localhost/supermarket', { useNewUrlParser: true });

    var db = mongoose.connection //saving connection do db

    db.on('error', console.error.bind(console, 'connection error'))
    db.on('open', () => {
        console.log('Database connected')
    })
}
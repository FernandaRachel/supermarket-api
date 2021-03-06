const products = require('../db/models/products.model');
const logger = require('../config/logger.config')();

module.exports = {
    getAll: function(resp) {
        var search = products.find();
        search.exec(function(err, data) {
            console.log(data)
            if (err) {
                logger.info(err.message)
                return err;
            }
            if (data) {
                logger.info('Retornando dados')
                return resp.send(data)
            } else {
                logger.info('Não há dados para a pesquisa feita')
                return resp.send({ message: 'Não há dados para a pesquisa feita' })
            }
        });
    },
    getByName: function(prodName, resp) {
        var regex = new RegExp(prodName, 'i');
        var search = products.find({ name: regex });
        search.exec(function(err, data) {
            console.log(data)
            if (err) {
                logger.info(err.message)
                return err;
            }
            if (data) {
                logger.info('Retornando dados')
                return resp.send(data)
            } else {
                logger.info('Não há dados para a pesquisa feita')
                return resp.send({ message: 'Não há dados para a pesquisa feita' })
            }
        });
    }
}
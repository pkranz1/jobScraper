const logger = require('./logger');

function requestLog(req, res, next){
    logger.info('METHOD: ', req.method);
    logger.info('PATH: ', req.path);
    logger.info('BODY: ', req.body);
    logger.info('--------------------');
    next();
} 

module.exports = {
    requestLog
};
const path = require('path');
const cred = require(`./${path.basename(__filename, '.js')}-cred`);

module.exports = {
    dbConnectionString: cred.dbConnectionString
};
const { version } = require('../../package.json');

module.exports = {
    port: process.env.NODE_PORT || 3005,
    version: version
}
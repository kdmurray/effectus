const server = require('./server');
const config = require('./config');

server.listen(config.port, () => {
    console.log(`started on port ${server.address().port}`);
});
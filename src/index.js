const server = require('./server');
const config = require('./config');

server.listen(3001, () => {
    console.log(`started on port ${server.address().port}`);
});
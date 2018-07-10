const server = require('./server');

server.listen(3001, () => {
    console.log(`started on port ${server.address().port}`);
});
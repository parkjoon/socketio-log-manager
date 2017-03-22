import initializeLogManager from './manager';

const config = require('./config.json');
const app = require('http').createServer();
const io = require('socket.io')(app);

app.listen(config.port || 8080, () => {
	console.log(`SocketIO log manager is now running on port ${config.port || 8080}.`);
	initializeLogManager(io);
});

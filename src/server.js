import initializeLogManager from './manager';

const app = require('http').createServer();
const io = require('socket.io')(app);

app.listen(8080, () => {
	console.log('SocketIO log manager is now running on port 8080.');
	initializeLogManager(io);
});

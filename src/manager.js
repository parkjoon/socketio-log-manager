import { APPLICATIONS, EVENTS, ROOMTYPES, TYPES } from './utilities/constants';
import { getRelevantRoomNames } from './utilities/manager';

export default function initializeLogManager(io) {
	console.log('Initializing log manager listeners...');
	io.on(EVENTS.CONNECTION, socket => {
		console.log(`Received event: connection from socket id: ${socket.id}`);

		socket.on(EVENTS.GET_APPLICATIONS, () => {
			console.log(`Received event: GET_APPLICATIONS from socket id: ${socket.id}`);
			socket.emit(EVENTS.SET_APPLICATIONS, APPLICATIONS);
		});

		socket.on(EVENTS.GET_ROOMTYPES, () => {
			console.log(`Received event: GET_ROOMTYPES from socket id: ${socket.id}`);
			socket.emit(EVENTS.SET_ROOMTYPES, ROOMTYPES);
		});

		socket.on(EVENTS.LOG, log => {
			console.log(`Received event: LOG from socket id: ${socket.id} with log time: ${log.time}`);
			const relevantRoomNames = getRelevantRoomNames(log.application, log.type);
			relevantRoomNames.forEach(relevantRoomName => {
				io.to(relevantRoomName).emit(EVENTS.LOG, log);
			});
		});

		socket.on(EVENTS.JOIN_ROOM, roomName => {
			console.log(`Received event: JOIN_ROOM from socket id: ${socket.id} for room: ${roomName}`);
			socket.join(roomName);
		});

		socket.on(EVENTS.LEAVE_ROOM, roomName => {
			console.log(`Received event: LEAVE_ROOM from socket id: ${socket.id} for room: ${roomName}`);
			socket.leave(roomName);
		});
	});
}

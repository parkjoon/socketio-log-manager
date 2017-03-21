import { EVENTS, ROOMTYPES, TYPES } from './utilities/constants';
import { getRelevantRoomNames } from './utilities/manager';

export default function initializeLogManager(io) {
	console.log('Initializing log manager listeners...');
	io.on(EVENTS.CONNECTION, socket => {
		socket.on(EVENTS.GET_ROOMTYPES, () => {
			socket.emit(EVENTS.SET_ROOMTYPES, ROOMTYPES);
		});

		socket.on(EVENTS.GET_TYPES, () => {
			socket.emit(EVENTS.SET_TYPES, TYPES);
		});

		socket.on(EVENTS.LOG, log => {
			const relevantRoomNames = getRelevantRoomNames(log.application, log.type);
			relevantRoomNames.forEach(relevantRoomName => {
				io.to(relevantRoomName).emit(log);
			});
		});

		socket.on(EVENTS.JOIN_ROOM, roomName => {
			socket.join(roomName);
		});

		socket.on(EVENTS.LEAVE_ROOM, roomName => {
			socket.leave(roomName);
		});
	});
}

export const APPLICATIONS = [
	{
		id: 'FORM_BUILDER',
		label: 'Form Builder'
	},
	{
		id: 'REPORT_FORM_BUILDER',
		label: 'Report Form Builder'
	}
];

// SocketIO events.
export const EVENTS = {
	CONNECTION: 'connection',
	GET_APPLICATIONS: 'GET_APPLICATIONS',
	GET_ROOMTYPES: 'GET_ROOMTYPES',
	GET_TYPES: 'GET_TYPES',
	LEAVE_ROOM: 'LEAVE_ROOM',
	LOG: 'LOG',
	JOIN_ROOM: 'JOIN_ROOM',
	SET_APPLICATIONS: 'SET_APPLICATIONS',
	SET_ROOMTYPES: 'SET_ROOMTYPES',
	SET_TYPES: 'SET_TYPES'
};

// Types of SocketIO rooms.
export const ROOMTYPES = {
	APPLICATION: 'APPLICATION',
	APPTYPE: 'APPTYPE',
	TYPE: 'TYPE'
};

// Types of logs.
export const TYPES = {
	DEBUG: 'DEBUG',
	ERROR: 'ERROR',
	FATAL: 'FATAL',
	INFO: 'INFO',
	TRACE: 'TRACE',
	WARNING: 'WARNING'
};

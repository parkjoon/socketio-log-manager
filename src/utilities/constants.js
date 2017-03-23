export const APPLICATIONS = [
	{
		id: 'ASSESSMENTS',
		icon: 'fa fa-commenting-o',
		label: 'Assessments'
	},
	{
		id: 'ASSESSMENTS_ADMIN',
		icon: 'fa fa-pencil-square-o',
		label: 'Assessments Admin'
	},
	{
		id: 'FORM_CREATOR',
		icon: 'fa fa-file-pdf-o',
		label: 'Form Creator'
	},
	{
		id: 'FORM_BUILDER',
		icon: 'fa fa-list-alt',
		label: 'Form Builder'
	},
	{
		id: 'FORM_SUBMISSION_ERROR',
		icon: 'fa fa-bug',
		label: 'Form Submission Error'
	},
	{
		id: 'REPORT_FORM_BUILDER',
		icon: 'fa fa-files-o',
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

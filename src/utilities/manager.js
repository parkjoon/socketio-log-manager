import { ROOMTYPES } from './constants';

export function getRelevantRoomNames(application, type) {
	return [
		`${ROOMTYPES.APPLICATION}_${application}`,
		`${ROOMTYPES.APPTYPE}_${application}_${type}`,
		`${ROOMTYPES.TYPE}_${type}`
	];
}

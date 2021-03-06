import {TASK_ADD, TASKS_LOAD, TASK_REPLACE, TASK_REMOVE} from "./task";

const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = (msg) => ({type:MESSAGE_SHOW, payload: msg});

export default (state='', action) => {
	switch(action.type){
		case MESSAGE_SHOW:
			return action.payload;
		case TASK_ADD:
		case TASKS_LOAD:
		case TASK_REPLACE:
		case TASK_REMOVE:
			return '';
		default:
			return state;
	}
}
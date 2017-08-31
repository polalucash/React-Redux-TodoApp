import {createTask, getTasks, updateTask, destroyTask} from "../lib/taskServices";
import {showMessage} from "./messages";

const initState = {
    tasks: [],
    currentTask: ''
};


export const TASK_ADD= 'TASK_ADD';
export const TASKS_LOAD = 'TASKS_LOAD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';
export const TASK_REPLACE = 'TASK_REPLACE';
export const TASK_REMOVE = 'TASK_REMOVE';

export const updateCurrent = (val)=>({type: CURRENT_UPDATE, payload: val});
export const loadTasks = (tasks) => ({type:TASKS_LOAD, payload: tasks});
export const addTask = (task) => ({type:TASK_ADD, payload: task});
export const replaceTask = (task) => ({type: TASK_REPLACE, payload:task});
export const removeTask = (id) => ({type: TASK_REMOVE, payload: id});

export const fetchTasks = () => {
	return(dispatch) => {
		dispatch(showMessage('Loading Tasks'));
		getTasks()
		.then(tasks =>dispatch(loadTasks(tasks)))
	}
};

export const saveTask = (name) => {
	return(dispatch) => {
		dispatch(showMessage('Saving Task'));
		createTask(name)
		.then(res => dispatch(addTask(res)))
	}
};

export const toggleTask = (id) => {
	return (dispatch, getState) => {
		dispatch(showMessage('Saving Task Update'));
		const {tasks} = getState().task;//the taskReducer returns the objects
		const task = tasks.find(t=>t.id === id);
		const toggled = {...task, isComplete: !task.isComplete};
		updateTask(toggled)
		.then(res => dispatch(replaceTask(res)))
	}
};

export const deleteTask = (id) =>{
	return (dispatch) =>{
		dispatch(showMessage('Remonving Task'));
		destroyTask(id)
		.then(() => dispatch(removeTask(id)));
	}
};

export const getVisibleTasks = (tasks, filter) =>{
	switch (filter){
		case 'active':
			return tasks.filter(t => !t.isComplete);
		case 'completed':
			return tasks.filter(t => t.isComplete);
		default:
			return tasks;
	}
};

export default (state = initState, action)=> {
    switch (action.type){
        case TASK_ADD:
            return {...state, currentTask:'', tasks: state.tasks.concat(action.payload)};
	    case CURRENT_UPDATE:
		    return {...state, currentTask: action.payload};
	    case TASKS_LOAD:
		    return {...state, tasks: action.payload};
	    case TASK_REPLACE:
	    	return {...state,
			    tasks: state.tasks.map(t => t.id === action.payload.id ? action.payload :t)};
	    case TASK_REMOVE:
		    return {...state,
			    tasks: state.tasks.filter(t => t.id !== action.payload)};
	    default:
            return state;
    }
}
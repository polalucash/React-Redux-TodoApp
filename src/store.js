import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import taskReducer from './reducers/task';
import messageReducer from './reducers/messages';

const reducer = combineReducers({
	task: taskReducer,
	message: messageReducer
});

export default createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

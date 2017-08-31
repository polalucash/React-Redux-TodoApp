import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateCurrent, saveTask} from '../reducers/task';

class TaskForm extends Component {
	handleInputChange = (evt)=>{
		const val = evt.target.value;
		this.props.updateCurrent(val);
	};
	handleSubmit = (evt) => {
		evt.preventDefault();
		this.props.saveTask(this.props.currentTask);
	};
	
	render(){
        const  {currentTask} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type = "text"
                    onChange = {this.handleInputChange}
                    value = {currentTask}
                />
            </form>
        )
    }
}

export default connect(
    (state) => ({currentTask: state.task.currentTask}),
    {updateCurrent, saveTask}
)(TaskForm)
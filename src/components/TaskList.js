import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTasks, toggleTask, deleteTask, getVisibleTasks} from "../reducers/task";
import {Button, Checkbox, List, Icon} from "semantic-ui-react";

const TaskItem = ({id, name, isComplete, toggleTask, deleteTask}) =>(
    <List.Item >
	    <span className='delete-item'>
		    <Button icon='remove' size='tiny'  onClick={() =>deleteTask(id)}></Button>
	    </span>
        <Checkbox
	        label={name}
            checked = {isComplete}
            onChange={() => toggleTask(id)}
        />
    </List.Item >
);
class TaskList extends Component {
	componentDidMount(){
		this.props.fetchTasks();
	}
    render(){
        return(
            <div className="Task-List">
                <List animated verticalAlign='middle'>
                    {this.props.tasks.map(task =>
	                    <TaskItem key={task.id}
	                              toggleTask = {this.props.toggleTask}
	                              deleteTask = {this.props.deleteTask}
	                              {...task}
	                    />)}
                </List>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({tasks: getVisibleTasks(state.task.tasks, ownProps.filter)}),
	{fetchTasks, toggleTask, deleteTask}
)(TaskList);
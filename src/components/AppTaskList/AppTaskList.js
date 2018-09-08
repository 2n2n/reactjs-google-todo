import React, { Component } from "react";
import { connect } from 'react-redux';
import { addToDo, editToDo } from '../../store/actions/ToDoActions';
import AppTaskItem from '../AppTaskItem/AppTaskItem';
import { toggleEditMode } from '../../store/actions/ToDoStateAction';
import { EDIT_MODE_ON } from '../../store/actions/actionTypes';
class AppTaskList extends Component {
    newText = "";
    onBlurHandler = () => {
        let item = this.props.tasks.filter((item) => item.id === this.props.selectedTask)[0];
        this.props.editToDoItem(item.id, this.newText)
        this.props.toggleEditMode();
    }
    onFocusHandler = () => { 
        this.props.toggleEditMode(EDIT_MODE_ON);
    }
    render() { 
        const tasks = this.props.tasks.map((task) => (
            <AppTaskItem
                key={task.id}
                edit={task.id === this.props.selectedTask}
                data={task}
                onBlur={this.onBlurHandler}
                onFocus={this.onFocusHandler}
                onKeyUp={(e) => this.newText = e.target.value }
            />
        ));

        return (
            <div>
                <h1>{ this.props.inputMode ? "edit mode on": "edit mode off"}</h1>
                <ul>
                    { tasks }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    inputMode: state.inputMode,
    selectedTask: state.activeTask
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (text) => dispatch(addToDo(text)),
    editToDoItem: (id, text) => dispatch(editToDo(id, text)),
    toggleEditMode: () => dispatch(toggleEditMode())
})
export default connect(mapStateToProps, mapDispatchToProps)(AppTaskList);
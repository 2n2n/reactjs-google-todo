import React, { Component } from "react";
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import { addToDo, editToDo, saveToDo } from '../../store/actions/ToDoActions';
import { clearState } from '../../store/actions/ToDoStateAction';
import InactiveTaskComponent from '../InactiveTaskComponent/InactiveTaskComponent';
import ActiveTaskComponent from '../ActiveTaskComponent/ActiveTaskComponent';

// import {
//     toggleEditMode,
//     selectAndEditItem,
//     clearState,
//     removeItemAndClearSelected
// } from '../../store/actions/ToDoStateAction';

// import { EDIT_MODE_ON } from '../../store/actions/actionTypes';

class TaskListComponent extends Component {
    newText = "";

    onClickHandler = (e, task) => { 
        this.props.edit(task)
    }

    saveAndClear = (task) => {
        this.props.editToDoItem(task.id, this.newText)
        this.props.clearState(task.id);
    }
    onBlurHandler = (e, task) => {
        task.text = e.target.value;
        this.props.save(task);
    }

    onKeyUpHandler = (e, task) => { // enter key
        if (e.which === 27) {
            this.props.cancel();
        }
        else if (e.which === 13) { // escape key
            task.text = e.target.value;
            this.props.save(task);
        }   
        this.newText = e.target.value;

    } 
    render() { 
        const todoItems = this.props.tasks.map((task) => (
            task === this.props.activeTask ?
                <ActiveTaskComponent
                    key={task.id}
                    data={task}
                    onBlur={this.onBlurHandler}
                    onKeyUp={this.onKeyUpHandler}/> :
                <InactiveTaskComponent
                    key={task.id}
                    data={task}
                    onClick={this.onClickHandler}/>
        ));
        return (
            <List>
                {todoItems}
            </List> 
        )
        // const tasks = this.props.tasks.map((task) => (
        //     <AppTaskItem
        //         key={task.id}
        //         edit={task.id === this.props.selectedTask}
        //         data={task}
        //         onBlur={this.onBlurHandler}
        //         onFocus={this.onFocusHandler}
        //         onKeyUp={this.onKeyUpHandler}
        //         onClick={this.onClickHandler}
        //     />
        // ));

        // return (
        //     <div>
        //         <h1>{ this.props.inputMode ? "edit mode on": "edit mode off"}</h1>
        //         <ul>
        //             { tasks }
        //         </ul>
        //     </div>
        // )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    inputMode: state.inputMode,
    activeTask: state.activeTask
});

const mapDispatchToProps = (dispatch) => ({
    add: (text) => dispatch(addToDo(text)),
    edit: (id, text) => dispatch(editToDo(id, text)),
    save: (item) => dispatch(saveToDo(item)),
    cancel: (id) => dispatch(clearState(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
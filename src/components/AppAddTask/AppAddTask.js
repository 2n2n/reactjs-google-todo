import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../../store/actions/ToDoActions';
class AppAddTask extends Component {
    onClickHandler = () => {
        this.props.addTask();
    }
    render() { 
        return (
            <div>
                <button onClick={this.onClickHandler}>+ Add Task</button> 
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    addTask: (text) => dispatch(addToDo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppAddTask);
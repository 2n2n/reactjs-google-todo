import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { addToDo } from '../../store/actions/ToDoActions';
import PlusIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import "./AddButtonComponent.css";
const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
})

class AddButtonComponent extends Component {
    onClickHandler = () => {
        this.props.addTask(this.props.items.length + 1);
    }
    render() { 
        return (
            <div>
                <Button
                    size="small"
                    disableRipple={true}
                    onClick={this.onClickHandler}
                    className='button'>
                    <PlusIcon color="primary" className={this.props.classes.button}/> Add Task
                </Button> 
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (text) => dispatch(addToDo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddButtonComponent));
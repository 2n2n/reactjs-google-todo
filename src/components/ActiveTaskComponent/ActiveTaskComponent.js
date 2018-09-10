import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Input from '@material-ui/core/Input';
import InputAdornment from "@material-ui/core/InputAdornment";
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import './ActiveTaskComponent.css'
import { clearState } from '../../store/actions/ToDoStateAction';
import Paper from '@material-ui/core/Paper';
import '../hover.css';
import { deleteToDo } from '../../store/actions/ToDoActions';

class ActiveTaskComponent extends Component {
    ref = null;
    constructor(props) {
        super(props);
        this.state = {
            checkable: false,
            activate: '',
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({activate: 'active'});
        }, 50);
        this.inputRef.focus();
        
    }
    onComplete = (e) => {
        this.props.done(this.props.data)
    }

    noEnterKey = (e) => {
        if (e.which == 13) {
            e.preventDefault();
        }
    }
    render() { 
        
        return (
            <li className={this.state.activate}>
                <div className="input-container">
                    <div className="checkable" onClick={(e) => this.props.done(this.props.data)}>
                        <div>
                            <CheckIcon color="primary" className="checked-ico" />
                            <UncheckedIcon color="inherit" className="unchecked-ico" />
                        </div>
                    </div>
                    <div className="click-edit" onClick={this.editItem}>
                        <div className="input-element">
                            <textarea
                                wrap="hard"
                                ref={(ref) => this.inputRef = ref}
                                defaultValue={this.props.data.text}
                                onKeyUp={(e) => this.props.onKeyUp(e, this.props.data)}
                                onKeyDown={this.noEnterKey}
                                onBlur={(e) => this.props.onBlur(e, this.props.data)} />
                        </div>
                        <div className="edit-btn">
                            <div>
                                <EditIcon color="inherit" />
                            </div>
                        </div>
                    </div>
                </div>
                <span className="bar"></span>
            </li>
            // <Paper square={true} elevation={2}>
            //     <ListItem className="list-item">
            //         <Input
            //             inputRef={(ref) => this.ref = ref}
            //             className='inputWithAdronment'
            //             id="input-with-icon-adornment"
            //             defaultValue={this.props.data.text}
            //             startAdornment={sAdornment}
            //             endAdornment={eAdornment}
            //             onKeyUp={ (e) => this.props.onKeyUp(e, this.props.data) }
            //             onBlur={(e) => this.props.onBlur(e, this.props.data)}
            //         />
            //     </ListItem>
            // </Paper>
        );
    }
};
const mapDispatchToProps = (dispatch) => ({
    clear: () => dispatch(clearState()),
    done: (item) => dispatch(deleteToDo(item))
}) 
export default connect(null, mapDispatchToProps)(ActiveTaskComponent);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import './InactiveTaskComponent.css';
import '../hover.css';
import { deleteToDo } from '../../store/actions/ToDoActions';


class InactiveTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkable: false,
        }
    }

    editItem = (e) => {
        this.props.onClick(e, this.props.data)
    }
    render() {        
        return (
            <li>
                 <div className="input-container">
                    <div className="checkable content-padding" onClick={(e) => this.props.done(this.props.data)}>
                        <div>
                            <CheckIcon color="primary" className="checked-ico" />
                            <UncheckedIcon color="inherit" className="unchecked-ico" />
                        </div>
                        </div>
                        <div className="click-edit" onClick={this.editItem}>
                            <div className="input-element">
                                {this.props.data.text}
                            </div>
                            <div className="edit-btn">
                                <div>
                                    <EditIcon color="inherit"/>
                                </div>
                            </div>
                        </div>
                    </div>
                <span className="bar"></span>
            </li>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    done: (item) => dispatch(deleteToDo(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(InactiveTaskComponent);
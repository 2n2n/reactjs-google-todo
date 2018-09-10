import React, { Component } from 'react';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


import './InactiveTaskComponent.css';
// import { Grid } from '@material-ui/core';
import '../hover.css';
class InactiveTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkable: false,
        }
    }

    render() {        
        return (
            <li onClick={(e) => this.props.onClick(e, this.props.data)}>
                <div className="input-container">
                    <div className="checkable" onClick={(e) => this.props.onClick(e, this.props.data)}>
                        <CheckIcon color="primary" className="checked-ico" />
                        <UncheckedIcon color="inherit" className="unchecked-ico" />
                    </div>
                    <div className="input-element">
                        { this.props.data.text }
                    </div>
                </div>
            </li>
        );
    }
}


export default InactiveTaskComponent;
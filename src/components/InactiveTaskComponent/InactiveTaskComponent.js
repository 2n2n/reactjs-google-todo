import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


import './InactiveTaskComponent.css';
import { Grid } from '@material-ui/core';
import '../hover.css';
class InactiveTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkable: false,
        }
    }

    render() {        
        let classNameState = "listItem";
        if (this.props.data.text !== null) {
            if (this.props.data.text > 0) {
                classNameState += " adjustedWithText"
            }
            else {
                classNameState += " adjustedWithText"
            }
        }
        return (
            <ListItem className={classNameState} onClick={(e) => this.props.onClick(e, this.props.data)}>
                <Grid container>
                    <Grid item className="item-checkbox" align="baseline" xs={1}>
                        <ListItemIcon>
                            <div className="checkable" onClick={(e) => this.props.onClick(e, this.props.data)}>
                            <CheckIcon color="primary" className="checked-ico"/>
                            <UncheckedIcon color="inherit" className="unchecked-ico"/>
                            </div>
                        </ListItemIcon>
                    </Grid>
                    <Grid item className="item-details" xs={11}>
                        <Grid item xs={11}>
                            <ListItemText primary={this.props.data.text} />
                        </Grid>
                        <Grid item xs={1}>
                            <ListItemSecondaryAction>
                                <ListItemIcon>
                                    <EditIcon className="svgIcon hideable" />
                                </ListItemIcon>
                            </ListItemSecondaryAction>
                        </Grid>
                    </Grid>
                </Grid>
                
            </ListItem>
        );
    }
}


export default InactiveTaskComponent;
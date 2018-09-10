import React, { Component } from "react";
import { connect } from "react-redux";

class CounterComponent extends Component {
    
    render = () => {
        console.log(this.props.taskCount)
        return (
            <span>
                ({this.props.taskCount})
            </span>
        )
    };
}

const mapStateToProps = (state) => { 
    return {
        taskCount: state.tasks.length
    }
}
export default connect(mapStateToProps)(CounterComponent);

import React from "react";
import CounterComponent from "../CounterComponent/CounterComponent";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const HeaderComponent = (props) => {
    return (
        <CardContent >
            <Typography color="textSecondary">TASKS</Typography>
            <Typography variant="headline" component="h2">Nico Smith's list <CounterComponent></CounterComponent></Typography>
        </CardContent>
    )
}

export default HeaderComponent;
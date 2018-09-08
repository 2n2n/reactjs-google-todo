import React from "react";
import TaskCounter from "../TaskCounter/TaskCounter";

const AppHeader = () => (
    <div>
        <section>TASKS</section>
        <h1>Nico Smith's list <TaskCounter/></h1>
    </div>
)

export default AppHeader;
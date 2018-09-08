import React from 'react';

const AppTaskItem = (props) => { 
    let html = (
        <li>
            <input type="checkbox" />
            {props.data.text}
        </li>
    )
    
    if (props.edit) {
        html = (
            <li>
                <input type="checkbox" />
                <input type="text"
                    defaultValue={props.data.text}
                    onBlur={props.onBlur} 
                    onKeyUp={props.onKeyUp}
                />
            </li>
        );
    }
    
    return html;
};


export default AppTaskItem;
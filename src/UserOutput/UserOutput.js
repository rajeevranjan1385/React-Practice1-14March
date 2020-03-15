import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return(
        <div className="UserOutput">
            <p>My user Name is {props.userName}</p>
            <p>This is another text</p>
        </div>
    );
}

export default userOutput;
import React from 'react';

const userInput = (props) =>{
    const style = {
        border: '1px solid yellowgreen'
    }
    return(
        <input type="text" onChange={props.Changed} style={style}
            value={props.Value} />
    );
}

export default userInput;
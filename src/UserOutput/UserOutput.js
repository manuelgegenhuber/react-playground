import React from 'react';

const userOutput = (props) => {

    return(
        <div className="useroutput">
            <p>User: {props.username}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default userOutput;
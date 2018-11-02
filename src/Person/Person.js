import React from 'react';

const person = (props) => {
    return(
        <div className="Person">
            <p>Hey I'm {props.name},</p>
            <p>who's {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;
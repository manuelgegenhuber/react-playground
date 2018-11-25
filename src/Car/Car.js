import React from 'react';

const car = (props) => {
    return (
        <div className="Car">
            <ul>
                <li>Model: {props.model}</li>
                <li>Color: {props.color}</li>
                <li>Year: {props.year}</li>
                <li>Description: {props.children}</li>
            </ul>
        </div>
    );
}

export default car;
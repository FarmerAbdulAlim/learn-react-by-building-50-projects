import React from 'react';

export default function ClickCounter(props) {
    const {count, countIncrement} = props;
    return (
        <div>
            <button onClick={countIncrement}>Clicked {count} Times</button>
        </div>
    );
};
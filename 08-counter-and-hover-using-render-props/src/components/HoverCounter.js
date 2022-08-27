import React from 'react';

export default function HoverCounter(props) {
    const {count, countIncrement} = props;
    return (
        <div>
            <button onMouseOver={countIncrement}>Hovered {count} Times</button>
        </div>
    );
};
import React from 'react';
import withCounter from './HOC/withCounter';

const HoverCounter = (props) => {
    const {count, countIncrement} = props;
    return (
        <div>
            <button type='button' onMouseOver = {countIncrement}>Hovered {count} Times</button>
        </div>
    );
}

export default withCounter(HoverCounter);
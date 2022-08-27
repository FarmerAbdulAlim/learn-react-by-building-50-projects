import React from 'react';
import withCounter from './HOC/withCounter';

const ClickCounter = (props) => {
    const {count, countIncrement} = props;
    return (
        <div>
            <button type='button' onClick={countIncrement}>Clicked {count} Times</button>
        </div>
    );
}

export default withCounter(ClickCounter);
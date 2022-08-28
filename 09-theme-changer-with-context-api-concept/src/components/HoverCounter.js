import React from 'react';

export default function HoverCounter(props) {
    const {count, incrementCount, theme, switchTheme} = props;
    const style = theme==='dark' ? { backgroundColor: 'black', color: 'white'} : null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hovered {count} Times</h1>
            <button onClick={switchTheme}>Change Theme</button>
        </div>
    );
};
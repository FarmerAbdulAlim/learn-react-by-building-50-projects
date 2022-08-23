import React from 'react';

//We restrict Button Component from re-rendering, when Clock Component is called.
class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const {change: currentChange, locale: currentLocale} = this.props; 
        const {change: nextChange, locale: nextLocale} = nextProps;
        if(currentChange === nextChange && currentLocale === nextLocale) return false;
        else return true;
    }
    render() {
        console.log("Button Component is Rendered");
        const {change, locale} = this.props;
        return(
            <div>
                <button onClick = {() => change(locale)}>Change Language</button>
            </div>
        )
    }
}

export default Button;
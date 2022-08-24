import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = {time: new Date(), locale : 'en-US'};

    componentDidMount() {
        this.clockTimer = setInterval(() => this.pick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    
    pick() {
        this.setState({
            time: new Date()
        })
    }
    handleClick = (locale) => {
        this.setState({
            locale: locale
        })
    }
    render() {
        console.log("Clock Component is Rendered");
        const {time, locale} = this.state; //destructing
        return (
            <div>
                <h1>Simple Clock App using React Class Component</h1>
                <h2>{time.toLocaleTimeString(locale)}</h2>
                {locale === 'bn-BD' ? (
                    <Button change = {this.handleClick} locale = 'en-US'></Button>
                ) : (
                    <Button change = {this.handleClick} locale = 'bn-BD'></Button>
                )}
            </div>
        )
    }
}

export default Clock;
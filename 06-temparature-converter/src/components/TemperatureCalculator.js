import React from 'react';
import TemperatureInput from './TemperatureInput';
import Verdict from './Verdict';

export default class TemperatureCalculator extends React.Component {
    state = {temperature: '', scale: 'c'};

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale: scale
        })
    }
    render() {
        const {temperature, scale} = this.state;
        let celsius = 0;
        let fahrenheit = 0;
        if(scale === 'c') {
             celsius = temperature;
             fahrenheit = (celsius*9/5)+32;
        }
        else {
            fahrenheit = temperature;
            celsius = 5/9*(fahrenheit-32);
        }
        if(temperature === '' || isNaN(temperature)) {
            celsius = '';
            fahrenheit = '';
        }
        //console.log("Calculator Rendered");
        return(
            <div>
                <TemperatureInput scale = 'c' temperature = {celsius} onTemperatureChange = {this.handleChange}/>
                <TemperatureInput scale = 'f' temperature = {fahrenheit} onTemperatureChange = {this.handleChange}/>
                <Verdict celsius = {celsius}></Verdict>
            </div>
        )
    }
}
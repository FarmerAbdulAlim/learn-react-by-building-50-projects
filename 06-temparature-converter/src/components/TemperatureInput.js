import React from "react"
const mp = {
    c: "Celsius",
    f: "Fahrenheit"
}

export default function TemperatureInput(props) {
    const {temperature, scale, onTemperatureChange} = props;
    //console.log("Input Rendered");
    return(
        <fieldset>
            <legend>Enter Temperature in {mp[scale]}</legend>
            <input type="text" value = {temperature} onChange = {(e) => onTemperatureChange(e, scale)}/>
        </fieldset>
    )
}
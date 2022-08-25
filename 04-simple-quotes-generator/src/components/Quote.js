import React from "react";
import {quotes} from "../data/quotes";

const qt = quotes();


export default class Quote extends React.Component {
    state = {randomQuoteIndex: 0};
    handleChange = () => {
        this.setState({
            randomQuoteIndex: Math.round(Math.random()*30)
        })
    }
    render() {
        const idx = this.state.randomQuoteIndex;
        return(
            <div>
                <div className="quote-section">
                    <h2>{qt[idx].quote}</h2>
                    <h3>---{qt[idx].author}</h3>
                </div>
                <button onClick={this.handleChange}>Generate Random Quote</button>
            </div>
        )
    }
}
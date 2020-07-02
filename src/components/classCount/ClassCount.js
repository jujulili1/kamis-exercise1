import React, { Component } from 'react';

class ClassCount extends Component {
    state = {
        number: 0,
    };

    addNumber = () => {
        this.setState({ number: this.state.number + 1 });
    };

    substractNumber = () => {
        if (this.state.number === 0) {
            alert('Nilai tidak boleh negatif');
        } else {
            this.setState({ number: this.state.number - 1 });
        }
    };

    resetNumber = () => {
        this.setState({ number: 0 });
    };

    render() {
        return (
            <div>
                <p>Count : {this.state.number}</p>
                <button onClick={this.addNumber}>+</button>
                <button onClick={this.substractNumber}>-</button>
                <button onClick={this.resetNumber}>Reset</button>
            </div>
        );
    }
}

export default ClassCount;

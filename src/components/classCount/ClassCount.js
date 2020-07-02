import React, { Component } from 'react'

export default class ClassCount extends Component {
        constructor(props) {
            super(props);
            this.state = {
              count: 0
            };
          }

          increment() {
            this.setState({
              count: this.state.count + 1
            });
          };

          decrement() {
            this.setState({
              count: this.state.count - 1
            });
          };

          reset() {
            this.setState({
              count: 0
            });
          };
    render() {
        return (
            <div>
                <p>count: {this.state.count} </p>
   <button onClick={(e) => this.increment(e)}>+</button>
    <button onClick={(e) => this.decrement(e)}>-</button>
    <button onClick={(e) => this.reset(e)}>Reset</button>
  </div>
        )
    }
}


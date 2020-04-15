import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {
  render() { 
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
        <div className="container">
          {this.props.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

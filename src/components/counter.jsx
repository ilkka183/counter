import React, { Component } from 'react';

export default class Counter extends Component {
  getBadgeClasses() {
    let classes = "badge badge-";

    if (this.props.counter.value === 0)
      classes += "warning";
    else
      classes += "primary";

    classes += " m-2";

    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={ () => this.props.onIncrement(this.props.counter) }
          >+</button>
          <button
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
            onClick={ () => this.props.onDecrement(this.props.counter) }
          >-</button>
          <button
            className="btn btn-danger btn-sm"
            onClick={ () => this.props.onDelete(this.props.counter.id) }
          >x</button>
        </div>
      </div>
    );
  }
}

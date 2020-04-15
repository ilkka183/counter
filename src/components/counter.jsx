import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ['tag1', 'tag2', 'tag3']
  };

  getBadgeClasses() {
    let classes = "badge badge-";

    if (this.state.value === 0)
      classes += "warning";
    else
      classes += "primary";

    classes += " m-2";

    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? 'Zero' : this.state.value;
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  }

  renderTags() {
    if (this.state.tags.count === 0)
      return <p>There are no tags!</p>;

    return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
  }

  render() {
    return (
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm" onClick={ this.handleIncrement }>Increment</button>
      </div>
    );
  }
}

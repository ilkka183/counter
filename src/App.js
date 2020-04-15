import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleReset = () => {
    console.log('Reset');

    const counters = this.state.counters.map(counter => {
      counter.value = 0;

      return counter;
    });

    this.setState({ counters });
  }

  handleIncrement = counter => {
    const counters = this.state.counters.map(item => {
      if (item === counter)
        item.value++;

      return item;
    });

    this.setState({ counters });
  }

  handleDecrement = counter => {
    const counters = this.state.counters.map(item => {
      if ((item === counter) && (item.value > 0))
        item.value--;

      return item;
    });

    this.setState({ counters });
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId);

    this.setState({ counters });
  }

  get totalCounters() {
    return this.state.counters.filter(counter => counter.value > 0).length;
  }

  render() { 
    return (
      <>
        <NavBar totalCounters={this.totalCounters}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

import React, { Component } from 'react';

class Counter extends Component() {
  constructor() {
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

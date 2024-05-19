import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Counter Class Component Mounted');
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count (Class Component): {this.state.count}</p>
        <button onClick={this.handleClick}>Increment (Class)</button>
      </div>
    );
  }
}

export default Counter;

import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Counter mounted');
    console.log('Counter value:', this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Counter updated');
    console.log('Previous count:', prevState.count);
    console.log('Current count:', this.state.count);
  }

  componentWillUnmount() {
    console.log('Counter unmounted');
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter;

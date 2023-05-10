import { Component } from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };

      this.increament = this.increament.bind(this);
    }

    increament() {
      this.setState({ counter: this.state.counter + 1 });
    }

    render() {
      return (
        <WrappedComponent
          counter={this.state.counter}
          increament={this.increament}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;

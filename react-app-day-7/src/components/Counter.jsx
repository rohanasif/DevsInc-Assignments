import React, { Component } from 'react'
import withCounter from './withCounter'
export class Counter extends Component {
  render() {
    return (
      <button onClick={this.props.increament}>Counter {this.props.counter}</button>
    )
  }
}

export default withCounter(Counter)
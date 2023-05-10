import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {
  render() {
    return (
      <h1 onMouseOver={this.props.increament}>Counter {this.props.counter}</h1>
    )
  }
}
export default withCounter(HoverCounter)
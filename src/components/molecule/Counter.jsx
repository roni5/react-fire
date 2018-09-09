import React, { Component } from 'react'
import PropTypes from 'prop-types'
//es7 [props not yet]


export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }
}
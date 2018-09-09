import React, { Component } from 'react';

class Handle extends Component {
  static propTypes = {
    handleClick: PropTypes.func,
  }
  render () {
    const {handleClick} = this.props
    return (
      <div onClick={handleClick} />
    )
  }
}
export default Handle;
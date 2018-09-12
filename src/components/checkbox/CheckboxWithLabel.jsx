/**
 * React Checkbox css js
 * React emotion Css in Js
 */
import React from 'react';
import * as PropTypes from "prop-types"

export default class CheckboxWithLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};

    this.onChange = this.onChange.bind(this);
  }
  static propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onChange : PropTypes.func
  }
  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <label>  Emails
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}
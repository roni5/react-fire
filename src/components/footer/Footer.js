import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { css } from "react-emotion";
export const ulist = css`
listStyle: none:

`
export const list = css`
background: #EE82EE;
  color: #C71585;
	max-height: 100%;
	padding: 15px auto;
	margin: 0 auto;
  margin-left: -41px ;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #C71585;
  height: 40px;
  .${ulist} {

  }
`

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
       year: new Date().getFullYear()
    }
  }
  propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: null
  };

  render() {
    return (
      <footer >
        <ul className={ulist}>
          <li className={list}>
            &copy; {this.state.year} Shopwiz.net
          </li>
        </ul>
      </footer>
    )
  }
}

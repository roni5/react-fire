import React, { Component } from 'react'


export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
       year: new Date().getFullYear()
    }
  }

  render() {
    return (
      <footer >
        <ul className="site-link">
          <li style={ { listStyle: 'none' , background: '#66cabf',    textAlign: 'center'}}>
            &copy; {this.state.year} Shopwiz.net
          </li>
        </ul>
      </footer>
    )
  }
}

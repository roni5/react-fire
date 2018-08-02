import React, { Component } from 'react';
import ChordSheetJS from 'chordsheetjs';
import ChordEdit from './ChordEdit.css';


export default class ChordEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 'Type Lyrics Here'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
        //this chordeditor not e
    this.setState({value: e.targe.value});
  }
  getChordMarkup() {
   //var formatter = new ChordSheetJS.HtmlFormatter(),
     //      parser = new ChordSheetJS.ChordProParser(),
     // song = parser.parse(this.state.value);
    //return { __html: formatter.format(song) };
  }
  render() {
    return (
      <div className="chord-editor">
      <div className="panel">
          <h3>Input</h3>
          <textarea className="text-area"
            onChange={this.handleChange}
            defaultValue={this.state.value} />
        </div>
        <div className="panel">
          <h3 className="ouput-title">Output</h3>
          <div className="output" dangerouslySetInnerHTML={this.getChordMarkup()} />
          </div>
        </div>

    )
  }
}

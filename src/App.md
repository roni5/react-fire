import React, { Component } from 'react';
import { base } from './base';
import logo from './logo.svg';
import ChordEidtor from './components/ChordEditor';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.updateSong = this.updateSong.bind(this);
    this.addSong = this.addSong.bind(this);
    this.state = {
      songs: { }
    };
  }

  addSong(title) {
    const songs = { ...this.state.songs }
    const id = id + 1
    songs[id]  = {
      id: id,
      title: title,
      chordpro: ''

    };

  }
  updateSong(song) {
   const songs = { ...this.state.songs }
      songs[song.id] = song;
    this.setState({ songs });
    }
  componentWillMount() {
   this.songsRef = base.syncState('songs', {
     context: this,
     state: 'songs'
    })
  }
  componentWillUnmount() {
    base.removeBinding(this.songsRef);

  }
  render() {
    return (
      <div className="App wrapper">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="workspace">
          <ChordEidtor />
          </div>


        <div className="footer">
          <Footer />
          </div>
      </div>
    );
  }
}

export default App;

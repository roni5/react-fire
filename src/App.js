import React, { Component } from 'react';
import { base } from './base';
//import { css } from 'emotion';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Title from './components/title/Title';
import UserItem from './components/user/UserItem';
import CheckboxWithLabel from './components/checkbox/CheckboxWithLabel';
import { paragraph, links } from './components/links/Links';
import Page from './components/page/Page';

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
      artist: ''

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
      <Page>
      <div className="App wrapper">
        <Header />
          <div className="workspace">
          </div>
        <Title> React Emotion CSS-in-JS </Title>
        <Title> <h2>Jest Enzyme </h2></Title>
        <Title> on Bitsrc.io </Title>
        <UserItem user='Roni' />
        <div>
    <p className={paragraph}>
      Some text with a
      <a className={links} target='blank'> link</a>
      <CheckboxWithLabel />
    </p>
  </div>
        <div className="footer">
          <Footer />
          </div>
      </div>
      </Page>
    );
  }
}

export default App;

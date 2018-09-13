import React, { Component } from 'react';
import { base } from './base';
//import { css } from 'emotion';
//import logo from './logo.svg';
import './App.css';
import {ThemeContext, themes} from './components/atoms/theme-context';
import ThemedButton from './components/atoms/themed-button';
import ThemeTogglerButton from './components/atoms/ThemeTogglerButton';
import SearchBar from './components/atoms/Search';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Title from './components/title/Title';
import UserItem from './components/user/UserItem';
import ImageList from './components/gallery/ImageList';
import CheckboxWithLabel from './components/checkbox/CheckboxWithLabel';
import TitleList from './components/itemlist/TitleList';
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

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
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
          <Title> React Emotion-JS <h2>Jest Enzyme </h2></Title>
          <ThemeContext.Provider value={this.state}>
          <Content />
          </ThemeContext.Provider>
          </div>
          <UserItem user={`Roni`}  />
        <div>
        <div className="footer">
          <Footer />
          </div>
          <Title>  <TitleList title="Top TV for Roni" url='discover/tv?sort_by=popularity.desc&page=1' /> </Title>

          <ImageList src={'https://res.cloudinary.com/shopwiz-net/image/upload/v1534764357/more-trees-03.png' } height={200} width={200} />
          <div>
        </div>
          <UserItem user={`Roni`}  />
        <div>
    <p className={paragraph}>
      Some text with a
      <a className={links} target='blank'> link</a>
      <CheckboxWithLabel />
    </p>
  </div>
      </div>
      </Page>
    );
  }
}
function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}
export default App;

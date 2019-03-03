import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

class App extends Component {
  state = {
    shows: [],
    showKey: '',
    showId: '',
    pageNumber: '',
    trailerURL: ''
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        'https://api.themoviedb.org/3/tv/popular?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US'
      );
      this.setState({ shows: res.data.results });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    console.log(this.state.shows);
    const shows = this.state.shows;

    let src = '';

    if (shows && shows.length > 0) {
      src = 'http://image.tmdb.org/t/p/original' + shows[0].backdrop_path;

      return (
        <>
          <Navigation />
          <Sidebar />
          <Home shows={this.state.shows} />
          <span className='overlay' />
          <img
            className='backdrop'
            src='https://i.ibb.co/Cmw82nP/Web-1920-1-2x.png'
            alt='backdrop'
          />
        </>
      );
    } else return '';
  }
}

export default App;

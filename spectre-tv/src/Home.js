import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './Home.css';
import mainPage from './components/mainpage';

class Home extends Component {
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
          <Route exact path='/' component={mainPage} shows={shows} src={src} />
          <span className='overlay' />
          <img className='backdrop' src={src} alt='backdrop' />
        </>
      );
    } else return '';
  }
}

export default Home;

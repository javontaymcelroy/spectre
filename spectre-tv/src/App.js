import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Loading from './components/Loading';
import Dramas from './components/Dramas';

class App extends Component {
  state = {
    popular: [],
    rated: [],
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
      this.setState({ popular: res.data.results });
    } catch (err) {
      console.log(err.message);
    }
    try {
      const res = await axios.get(
        'https://api.themoviedb.org/3/tv/top_rated?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US'
      );
      this.setState({ rated: res.data.results });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    console.log(this.state.rated);
    const popular = this.state.popular;
    const rated = this.state.rated;

    let src = '';

    if ((popular, rated && popular.length, rated.length > 0)) {
      src = 'http://image.tmdb.org/t/p/original' + popular[0].backdrop_path;

      return (
        <>
          <Route path='/' component={Navigation} />
          <Route path='/' component={Sidebar} />
          <Route
            exact
            path='/'
            render={props => (
              <Home
                {...props}
                popular={this.state.popular}
                rated={this.state.rated}
              />
            )}
          />
          <Route path='/Dramas' render={props => <Dramas />} />
          <span className='overlay' />
          <img
            className='backdrop'
            src='https://i.ibb.co/Cmw82nP/Web-1920-1-2x.png'
            alt='backdrop'
          />
        </>
      );
    } else return <Loading />;
  }
}

export default App;

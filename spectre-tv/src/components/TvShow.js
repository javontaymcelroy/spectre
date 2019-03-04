import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import './TvShow.css';

class TvShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      showDetails: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }?language=en-US&api_key=6d9a91a4158b0a021d546ccd83d3f52e`
      )
      .then(res => this.setState({ showDetails: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.showDetails);
    const showDetails = this.state.showDetails;
    return (
      <div className='show-page-container'>
        <div className='show-hero'>
          <img
            src={
              'http://image.tmdb.org/t/p/original' + showDetails.backdrop_path
            }
            alt={showDetails.name}
            className='show-backdrop'
          />
          <div className='show-info'>
            <h1 className='headers'>{showDetails.name}</h1>
            <p className='overviews'>{showDetails.overview}</p>
          </div>
        </div>
        <img
          src={'http://image.tmdb.org/t/p/original' + showDetails.backdrop_path}
          alt={showDetails.name}
          className='show-page-backdrop'
        />
        <span className='show-overlay' />
      </div>
    );
  }
}

export default TvShow;

// backdrop_path: 'http://image.tmdb.org/t/p/original' +
// created_by.name
// first_air_date
// genres.name
// homepage
// languages
// last_air_date
// name
// networks.name
// overview
// poster_path

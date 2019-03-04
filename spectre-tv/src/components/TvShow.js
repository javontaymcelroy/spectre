import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import SimilarShowsPosters from './SimilarShows';
import HorizontalScroll from 'react-scroll-horizontal';

import './TvShow.css';

class TvShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      showDetails: {},
      similarShows: []
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

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }/similar?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1`
      )
      .then(res => this.setState({ similarShows: res.data.results }))
      .catch(err => console.log(err));
  }

  addDefaultSrc(ev) {
    ev.target.src = 'https://i.ibb.co/cbgFn2Z/spectre-default-backdrop.png';
  }

  addDefaultSrcPoster(ev) {
    ev.target.src = 'https://i.ibb.co/PwJHHhT/movieposterdefault.png';
  }

  render() {
    console.log(this.state.showDetails);
    const showDetails = this.state.showDetails;
    const parentNoHero = { width: `100%`, height: `495px` };
    return (
      <div className='show-page-container'>
        <div className='show-hero'>
          <img
            src={
              'http://image.tmdb.org/t/p/original' + showDetails.backdrop_path
            }
            alt={showDetails.name}
            className='show-backdrop'
            onError={this.addDefaultSrc}
          />
          <div className='show-info'>
            <h1 className='headers'>{showDetails.name}</h1>
            <p className='overviews'>{showDetails.overview}</p>
          </div>
        </div>
        <div className='similar-container' style={parentNoHero}>
          <h1 className='headers'>
            <mark>Similar</mark>TV Shows
          </h1>
          <HorizontalScroll
            reverseScroll={true}
            config={{ stiffness: 100, damping: 20 }}
          >
            <SimilarShowsPosters
              similarShows={this.state.similarShows}
              addDefaultSrcPoster={this.addDefaultSrcPoster}
            />
          </HorizontalScroll>
        </div>
        <img
          src={'http://image.tmdb.org/t/p/original' + showDetails.backdrop_path}
          alt={showDetails.name}
          className='show-page-backdrop'
          onError={this.addDefaultSrc}
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

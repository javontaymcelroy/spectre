import React from 'react';
import { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import SimilarShowsPosters from './SimilarShows';
import HorizontalScroll from 'react-scroll-horizontal';

import './TvShow.css';
import Extras from './Extras';

class TvShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      showDetails: {},
      similarShows: [],
      extras: [],
      contentRating: [],
      credits: [],
      networks: [],
      episodes: [],
      seasons: []
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
        }?language=en-US&api_key=6d9a91a4158b0a021d546ccd83d3f52e`
      )
      .then(res => this.setState({ seasons: res.data.seasons }))
      .catch(err => console.log(err));

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }?language=en-US&api_key=6d9a91a4158b0a021d546ccd83d3f52e`
      )
      .then(res => this.setState({ networks: res.data.networks }))
      .catch(err => console.log(err));

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }/recommendations?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1`
      )
      .then(res => this.setState({ similarShows: res.data.results }))
      .catch(err => console.log(err));

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }/videos?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ extras: res.data.results }))
      .catch(err => console.log(err));

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }/content_ratings?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ contentRating: res.data.results }))
      .catch(err => console.log(err));

    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${
          this.state.id
        }/credits?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ credits: res.data.cast }))
      .catch(err => console.log(err));

    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${
          this.state.id
        }/season/1?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ episodes: res.data.episodes }))
      .catch(err => console.log(err));
  }

  addDefaultSrc(ev) {
    ev.target.src = 'https://i.ibb.co/cbgFn2Z/spectre-default-backdrop.png';
  }

  addDefaultSrcPoster(ev) {
    ev.target.src = 'https://i.ibb.co/PwJHHhT/movieposterdefault.png';
  }

  render() {
    const showDetails = this.state.showDetails;
    const credits = this.state.credits;
    const networks = this.state.networks;
    const episodes = this.state.episodes;
    const seasons = this.state.seasons;

    const parentNoHero = { width: `100%`, height: `495px` };
    return (
      <div className='show-page-container'>
        <div className='show-hero'>
          <div className='show-player'>
            <img
              src={
                'http://image.tmdb.org/t/p/original' + showDetails.backdrop_path
              }
              alt={showDetails.name}
              className='show-backdrop'
              onError={this.addDefaultSrc}
            />
            <div className='episode-selection'>
              <h2>Seasons</h2>
              <div className='seasons-flex'>
                {seasons.map(season => (
                  <p className='seasons'>{season.season_number}</p>
                ))}
              </div>
              <h2>Episodes</h2>
              <div className='episodes'>
                {episodes.map(episode => (
                  <>
                    <h4 className='episode'>
                      {' '}
                      {episode.episode_number} - {episode.name}{' '}
                    </h4>
                    <p className='episode-overview'> {episode.overview} </p>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className='show-info'>
            <h2 className='air-date'>
              {' '}
              {moment(showDetails.first_air_date, 'YYYY-MM-DD').format(
                'YYYY'
              )}{' '}
            </h2>
            <div className='header-flex'>
              <h1 className='headers-hero'>{showDetails.name}</h1>
              <h2> {showDetails.vote_average} / 10</h2>
            </div>
            <div className='overview-flex'>
              <p className='overviews'>{showDetails.overview}</p>
            </div>
            <div className='show-info-container'>
              <h2>Cast</h2>
              <div className='cast'>
                {credits.map(credit => (
                  <>
                    <p className='castname'>
                      <mark>{credit.name}</mark> as {credit.character}
                    </p>
                    <p> · </p>
                  </>
                ))}
              </div>
            </div>
            <div className='network-container'>
              {networks.map(network => (
                <>
                  {/* <p className='network'>{network.name}</p> */}
                  <img
                    src={
                      'http://image.tmdb.org/t/p/original' + network.logo_path
                    }
                    alt='logo'
                    className='network-logo'
                  />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className='extras-container'>
          <h1 className='headers'>
            <mark>Extras</mark>
          </h1>
          <div className='video-display' style={parentNoHero}>
            <Extras extras={this.state.extras} />
          </div>
        </div>
        <div className='similar-container' style={parentNoHero}>
          <h1 className='headers'>
            <mark>Recommended</mark>TV Shows
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

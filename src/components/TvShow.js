import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import Iframe from 'react-iframe';
import axios from 'axios';

import SimilarShowsPosters from './SimilarShows';

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
      seasons: [],
      selectedSeason: 1,
      selectedEpisode: null,
      xPos: 0,
      startXPos: null,
      scrollStart: null,
      ref: React.createRef(),
      scrollLeft: 0,
      getShow: false
    };
  }

  // -----------------------------SHOW DETAILS---------------------------------- //
  componentDidMount() {
    console.log('TV show did mount');
    this.setState({ getShow: true });
    this.getEpisodes(1);
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }?language=en-US&api_key=6d9a91a4158b0a021d546ccd83d3f52e`
      )
      .then(res => this.setState({ showDetails: res.data }))
      .catch(err => console.log(err));

    // -----------------------------SEASONS---------------------------------- //
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }?language=en-US&api_key=6d9a91a4158b0a021d546ccd83d3f52e`
      )
      .then(res => this.setState({ seasons: res.data.seasons }))
      .catch(err => console.log(err));

    // -----------------------------NETWORKS---------------------------------- //
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }?language=en-US&api_key=6d9a91a4158b0a021d546ccd83d3f52e`
      )
      .then(res => this.setState({ networks: res.data.networks }))
      .catch(err => console.log(err));

    // -----------------------------SIMILAR SHOWS---------------------------------- //
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }/recommendations?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1`
      )
      .then(res => this.setState({ similarShows: res.data.results }))
      .catch(err => console.log(err));

    // -----------------------------EXTRAS---------------------------------- //
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }/videos?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ extras: res.data.results }))
      .catch(err => console.log(err));

    // -----------------------------CONTENT RATING---------------------------------- //
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }/content_ratings?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ contentRating: res.data.results }))
      .catch(err => console.log(err));

    // -----------------------------CREDITS---------------------------------- //
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${
          this.state.id
        }/credits?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ credits: res.data.cast }))
      .catch(err => console.log(err));
  }

  // -----------------------------MISC FUNCTIONS---------------------------------- //

  addDefaultSrc(ev) {
    ev.target.src = 'https://i.ibb.co/cbgFn2Z/spectre-default-backdrop.png';
  }

  addDefaultSrcPoster(ev) {
    ev.target.src = 'https://i.ibb.co/PwJHHhT/movieposterdefault.png';
  }
  //Change selected season
  selectSeason = number => {
    this.setState({ selectedSeason: number });
    this.getEpisodes(number);
  };

  componentWillReceiveProps = nextProps => {
    let episodeNum = nextProps.match.params.episodeNumber;
    if (episodeNum && episodeNum !== this.state.selectedEpisode) {
      console.log('component recieved new props');
      this.setState({ selectedEpisode: episodeNum });
    }
  };

  // -----------------------------EPISODES---------------------------------- //
  getEpisodes = seasonNumber => {
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${
          this.state.id
        }/season/${seasonNumber}?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ episodes: res.data.episodes }))
      .catch(err => console.log(err));
  };

  // https://videospider.in/getvideo?key=4VQ6XG7DQ6o6EhxC&video_id=1412&tmdb=1&tv=1&s=1&e=64112

  // https://videospider.in/getvideo?key=4VQ6XG7DQ6o6EhxC&video_id=1412&tmdb=1&tv=1&s=1&e=1

  getTVStream = () => {
    const KEY = '4VQ6XG7DQ6o6EhxC';
    console.log(this.state.selectedSeason);
    return `https://videospider.in/getvideo?key=${KEY}&video_id=${
      this.state.id
    }&tmdb=1&tv=1&s=${this.state.selectedSeason}&e=${
      this.state.selectedEpisode
    }`;
  };

  handleWheel = event => {
    let node = ReactDOM.findDOMNode(this.state.ref.current);
    event.preventDefault();
    if (event.deltaY > 0) {
      console.log('node', node.scrollLeft + 950);
      node.scrollLeft = node.scrollLeft + 950;
    } else {
      console.log('node', node.scrollLeft - 950);
      node.scrollLeft = node.scrollLeft - 950;
    }
  };

  getContent = () => {
    // This gets either the poster or the iframe for the video.
    if (this.state.selectedEpisode) {
      return (
        <Iframe
          title='show'
          width='2500px'
          height='450px'
          url={this.getTVStream()}
          frameBorder='0'
          allowFullScreen
          display='initial'
          position='relative'
          Sandbox=''
        />
      );
    }
    return (
      <img
        src={
          'http://image.tmdb.org/t/p/original' +
          this.state.showDetails.backdrop_path
        }
        alt={this.state.showDetails.name}
        className='show-backdrop'
        onError={this.addDefaultSrc}
      />
    );
  };

  changeGetShow = () => {
    this.setState({ getShow: true });
  };

  // -----------------------------RENDER FUNCTION---------------------------------- //
  render() {
    window.scroll(0, 0);
    const showDetails = this.state.showDetails;
    const credits = this.state.credits;
    const networks = this.state.networks;
    const episodes = this.state.episodes;
    const seasons = this.state.seasons;
    const addMovie = this.props.addMovie;

    const parentNoHero = { width: `100%`, height: `495px` };
    return (
      <div className='show-page-container'>
        <div className='show-hero'>
          <div className='show-player'>
            {this.getContent()}

            {/*-----------------------------SEASONS & EPISODES--------------------------------------*/}

            <div className='episode-selection'>
              <h2>Seasons</h2>
              <div className='seasons-flex'>
                {seasons.map(season => (
                  <p
                    className='seasons'
                    onClick={() => this.selectSeason(season.season_number)}
                  >
                    {season.season_number}
                  </p>
                ))}
              </div>
              <h2>Episodes</h2>
              <div className='episodes scroller'>
                {episodes.map(episode => (
                  <>
                    <NavLink
                      onClick={this.changeGetShow}
                      to={`/TvShow/${this.state.id}/${episode.episode_number}`}
                      className='episode'
                    >
                      <h4 className='episode'>
                        {' '}
                        {episode.episode_number} - {episode.name}{' '}
                      </h4>
                    </NavLink>
                    <p className='episode-overview'> {episode.overview} </p>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className='show-info'>
            <div className='pre-header-flex'>
              <h2 className='air-date'>
                {' '}
                {moment(showDetails.first_air_date, 'YYYY-MM-DD').format(
                  'YYYY'
                )}{' '}
              </h2>
              <h2> {showDetails.vote_average} / 10</h2>
            </div>
            <div className='header-flex'>
              <h1 className='headers-hero'>{showDetails.name}</h1>
              <button className='favorite-btn' onClick={addMovie}>
                + Add to List
              </button>
            </div>
            <div className='overview-flex'>
              <p className='overviews scroller'>{showDetails.overview}</p>
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
        <div className='similar-container scroller' style={parentNoHero}>
          <h1 className='headers'>
            <mark>Recommended</mark>TV Shows
          </h1>

          <SimilarShowsPosters
            similarShows={this.state.similarShows}
            addDefaultSrcPoster={this.addDefaultSrcPoster}
            wheel={this.handleWheel}
            ref={this.state.ref}
          />
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './SearchPage.css';
import './Posters.css';

class SearchResults extends Component {
  state = {
    results: []
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.query !== nextProps.match.params.query) {
      let query = this.props.match.params.query;
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&query=${query}&page=1`
        )
        .then(({ data }) => {
          console.log(data);
          this.setState({
            results: data.results
          });
        });
    }
  }

  addDefaultSrc(ev) {
    ev.target.src = 'https://i.ibb.co/PwJHHhT/movieposterdefault.png';
  }

  componentDidMount() {}

  render() {
    return (
      <div className='search-poster-container'>
        {this.state.results.map(result => {
          return (
            <Link to={`/tvshow/${result.id}`} className='title-links'>
              <div className='search-flex'>
                <div>
                  <img
                    src={`http://image.tmdb.org/t/p/w500${result.poster_path}`}
                    alt={result.name}
                    className='search-posters'
                    onError={this.addDefaultSrc}
                  />
                  <h3 className='search-poster-title'> {result.name} </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default SearchResults;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './SearchPage.css';

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

  componentDidMount() {}

  render() {
    return (
      <div classname='search-page-container'>
        <div className='search-header'>
          <div className='search-posters'>
            {this.state.results.map(result => {
              return (
                <Link to={`/TvShow/${result.id}`} className='title-links'>
                  <div className='search-flex'>
                    <img
                      src={`http://image.tmdb.org/t/p/w500${
                        result.poster_path
                      }`}
                      alt={result.name}
                      className='search-posters'
                    />
                    <h3 className='search-poster-title'> {result.name} </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;

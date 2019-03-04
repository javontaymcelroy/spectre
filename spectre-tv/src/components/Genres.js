import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Page.css';
import axios from 'axios';

import './GenrePage.css';

class Genres extends Component {
  constructor(props) {
    super(props);

    let categoryID = this.getCategoryId();

    this.state = {
      category: this.props.match.params.name,
      genres: this.props.genres,
      categoryID: categoryID,
      shows: [],
      pageNumber: 1
    };
  }

  getCategoryId = () => {
    let categoryID = null;

    this.props.genres.map(genre => {
      if (genre.name === 'Action & Adventure') {
        genre.name = 'Action';
      } else if (genre.name === 'Sci-Fi & Fantasy') {
        genre.name = 'Sci-Fi';
      } else if (genre.name === 'War & Politics') {
        genre.name = 'History';
      }

      if (genre.name === this.props.match.params.name) {
        categoryID = genre.id;
      }
    });

    return categoryID;
  };

  componentDidMount() {
    this.getShows(this.state.categoryID, this.state.pageNumber);
  }

  getShows = (categoryID, pageNumber) => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&origin_country=U&sort_by=popularity.desc&page=${pageNumber}&timezone=America%2FNew_York&with_genres=${categoryID}&include_null_first_air_dates=false&with_original_language=en`
      )
      .then(res => this.setState({ shows: res.data.results }))
      .catch(err => console.log(err));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps === this.props) {
      return;
    }

    const categoryID = this.getCategoryId();
    this.getShows(categoryID, this.state.pageNumber);
    this.setState({ category: this.props.match.params.name, categoryID });
  }

  pageChange = event => {
    // debugger;
    if (event.target.name === 'prev' && this.state.pageNumber === 1) {
      return;
    }

    if (event.target.name === 'next') {
      this.getShows(this.state.categoryID, this.state.pageNumber + 1);
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    } else {
      this.getShows(this.state.categoryID, this.state.pageNumber - 1);
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  };

  addDefaultSrc(ev) {
    ev.target.src = 'https://i.ibb.co/PwJHHhT/movieposterdefault.png';
  }

  render() {
    window.scroll(0, 0);
    const shows = this.state.shows;
    return (
      <div className='genre-page-container'>
        <div className='genre-header'>
          <h1 className='headers'>{this.state.category}</h1>
          <div className='page-btns'>
            <img
              className={this.state.pageNumber === 1 ? 'prev disabled' : 'prev'}
              src='https://i.ibb.co/S7QDMG6/prev.png'
              alt='previous'
              name='prev'
              onClick={this.pageChange}
            />
            <img
              className='next'
              src='https://i.ibb.co/WV7JHS0/next.png'
              alt='next'
              name='next'
              onClick={this.pageChange}
            />
          </div>
        </div>
        <div className='genre-posters'>
          {shows.map(show => (
            <NavLink
              to={`/TvShow/${show.id}`}
              key={show.id}
              className='title-links'
            >
              <div key={show.id}>
                <img
                  src={`http://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name}
                  className='page-posters'
                  onError={this.addDefaultSrc}
                />

                <h3 className='poster-title'> {show.name} </h3>
              </div>
            </NavLink>
          ))}
        </div>
        <div className='bottom-page-btns'>
          <img
            className={this.state.pageNumber === 1 ? 'prev disabled' : 'prev'}
            src='https://i.ibb.co/S7QDMG6/prev.png'
            alt='previous'
            name='prev'
            onClick={this.pageChange}
          />
          <img
            className='next'
            src='https://i.ibb.co/WV7JHS0/next.png'
            alt='next'
            name='next'
            onClick={this.pageChange}
          />
        </div>
      </div>
    );
  }
}

export default Genres;

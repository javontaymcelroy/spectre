import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import SearchResults from './SearchResults';

class Search extends Component {
  state = {
    query: '',
    results: []
  };

  componentDidUpdate(prevProps, prevState) {
    const { history } = this.props;
    if (prevState.results !== this.state.results) {
      history.push('/results');
    }
  }

  getInfo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&query=${
          this.state.query
        }&page=1`
      )
      .then(({ data }) => {
        this.setState({
          results: data
        });
      });
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    const results = this.state.results;
    return (
      <div>
        <form>
          <input
            className='search'
            placeholder='⌕'
            type='text'
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(Search);

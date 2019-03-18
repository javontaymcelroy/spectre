import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Search extends Component {
  state = {
    query: '',
    results: []
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const { history } = this.props;
  //   if (prevState.results !== this.state.results) {
  //     history.push('/results');
  //   }
  // }

  getInfo = e => {
    e.preventDefault();
    console.log('pushing the query string to the results page');
    this.props.history.push(`/results/${this.state.query}`);
  };

  handleInputChange = e => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo(e);
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getInfo}>
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

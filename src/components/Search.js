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
    this.props.history.push(`/results/${this.state.query}`);
  };

  handleInputChange = e => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 1 === 0) {
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
            placeholder='search'
            type='text'
            value={this.state.query}
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(Search);

import React from 'react';
import { Component } from 'react';
import axios from 'axios';

class TvShow extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      id: this.props.match.params.id,
      showDetails: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ showDetails: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.showDetails);
    return (
      <div>
        <h1>SHOW PAGE</h1>
      </div>
    );
  }
}

export default TvShow;

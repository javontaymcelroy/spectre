import React from 'react';
import { Component } from 'react';
import './Seasons.css';

class Seasons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: []
    };
  }
  render() {
    return <div className='seasons-container'>Hello</div>;
  }
}

export default Seasons;

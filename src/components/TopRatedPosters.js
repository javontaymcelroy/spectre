import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HorizontalScroll from "react-scroll-horizontal";

import "./Posters.css";

class TopRatedPosters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lockScroll: false
    };
  }
  render() {
    const rated = this.props.rated;
    const addDefaultSrc = this.props.addDefaultSrc;
    return (
      <HorizontalScroll pageLock={true} reverseScroll={true}>
        <div className="poster-container-nohero scroller">
          {rated.map(rated => (
            <div key={rated.id}>
              <NavLink to={`/TvShow/${rated.id}`} className="title-links">
                <img
                  src={`http://image.tmdb.org/t/p/w500${rated.poster_path}`}
                  alt={rated.name}
                  className="posters"
                  onError={addDefaultSrc}
                />
                <h3 className="poster-title"> {rated.name} </h3>
              </NavLink>
            </div>
          ))}
        </div>
      </HorizontalScroll>
    );
  }
}

export default TopRatedPosters;

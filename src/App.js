// ------------DEPENDANCIES ----------------------//
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import axios from "axios";
// ------------STYLES ----------------------//
import "./App.css";
// ------------COMPONENTS ----------------------//
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Genres from "./components/Genres";
import TvShow from "./components/TvShow";
import SearchResults from "./components/SearchResults";

// ------------CLASS COMPONENT ----------------------//
class App extends Component {
  state = {
    popular: [],
    rated: [],
    showKey: "",
    showId: "",
    pageNumber: "",
    trailerURL: "",
    genres: [],
    xPos: 0,
    startXPos: null,
    scrollStart: null,
    topref: React.createRef(),
    popref: React.createRef(),
    scrollLeft: 0
  };

  // ------------DATA FETCHES----------------------//

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US"
      )
      .then(res => this.setState({ popular: res.data.results }))
      .catch(err => console.log(err));

    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US"
      )
      .then(res => this.setState({ rated: res.data.results }))
      .catch(err => console.log(err));

    axios
      .get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US"
      )
      .then(res => this.setState({ genres: res.data.genres }))
      .catch(err => console.log(err));
  }

  // ------------MISC FUNCTIONS----------------------//
  // - Default Poster Images - //
  addDefaultSrc(ev) {
    ev.target.src = "https://i.ibb.co/PwJHHhT/movieposterdefault.png";
  }

  handleWheel = (event, location = null) => {
    //stop the screen from scrolling up or down.
    event.preventDefault();

    //get the dom element from the react ref
    let node = ReactDOM.findDOMNode(this.state.topref.current);

    if (location === "top") {
      //if location is top then get the other ref
      node = ReactDOM.findDOMNode(this.state.popref.current);
    }

    if (event.deltaY > 0) {
      //scrolling down on the wheel
      node.scrollLeft = node.scrollLeft + 200;
    } else {
      //scrolling up on the wheel.
      node.scrollLeft = node.scrollLeft - 200;
    }
  };

  render() {
    window.scroll(0, 0);
    // ------------DECONSTRUCTIONS----------------------//
    const popular = this.state.popular;

    // ------------DATA RETURNS AN EMPTY ARRAY FIRST SO AN IF ELSE STATEMENT IS RAN TO GET THE DATA----------------------------//
    if (popular && popular.length > 0) {
      return (
        <div>
          <Route component={Navigation} />
          <Route path="/results/:query" component={SearchResults} />
          <Route
            path="/"
            render={props => <Sidebar {...props} genres={this.state.genres} />}
          />
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                popular={this.state.popular}
                rated={this.state.rated}
                addDefaultSrc={this.addDefaultSrc}
                wheel={this.handleWheel}
                ref={this.state.topref}
                popref={this.state.popref}
              />
            )}
          />
          <Route
            path="/genres/:name"
            render={props => <Genres {...props} genres={this.state.genres} />}
          />
          <Route path="/TvShow/:id" render={props => <TvShow {...props} />} />
          <Route
            path="/TvShow/:id/:episodeNumber"
            render={props => <TvShow {...props} />}
          />
          <img
            className="backdrop"
            src={`http://image.tmdb.org/t/p/original${
              popular[0].backdrop_path
            }`}
            alt="backdrop"
          />
          <span className="overlay" />
        </div>
      );
    } else return <Loading />;
  }
}

export default App;

// APIKEY = 6d9a91a4158b0a021d546ccd83d3f52e

// https://api.themoviedb.org/3/genre/tv/list?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US
// https://developers.themoviedb.org/3/discover/tv-discover - TV-DISCOVER

// https://api.themoviedb.org/3/discover/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&origin_country=U&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=16&include_null_first_air_dates=false&with_original_language=en

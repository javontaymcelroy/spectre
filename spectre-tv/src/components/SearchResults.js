// import React from 'react';
// import { Component } from 'react';

// class SearchResults extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search: ''
//     };
//   }

//   searchChangeHandler = event => {
//     this.setState({ search: event.target.value });
//   };

//   submitSearch = event => {
//     event.preventDefault();

//     let query = `https://api.themoviedb.org/3/search/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&query=${
//       this.state.search
//     }&page=1&include_adult=false`;

//     if (this.state.search === '') {
//       query =
//         'https://api.themoviedb.org/3/tv/popular?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1';
//       this.setState({ pageNumber: 1 });
//     } else {
//       this.setState({ title: this.state.search });
//     }
//   };

//   render() {
//     return <div>Hello From Search</div>;
//   }
// }

// export default SearchResults;

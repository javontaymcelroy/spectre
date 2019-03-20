import React from 'react';
import MyListList from './MyListList';
import TvShow from './TvShow';

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    };
  }

  addMovie = e => {
    this.setState({ item: [] });
    this.props.addItem(e, this.state.item);
  };

  render() {
    return <tvshow addMovie={this.addMovie} />;
  }
}

export default MyList;

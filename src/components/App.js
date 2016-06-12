import React from 'react';
import Menu from './Menu'
import SongList from './SongList';

import { connect } from 'react-redux';
import { searchArtist } from '../actions/spotify';
import Immutable from 'immutable';

class App extends React.Component {
  render() {
    const { dispatch, spotify } = this.props;
    console.log(spotify.get("Data"));
    return (
      <div>
       <Menu />
       <SongList />
       </div>
      )
  }
}

function select(state) {
  return {
    spotify: state.spotify
  }
}

export default connect(select)(App)
import React from 'react';

import { connect } from 'react-redux';
import { searchArtist, setArtist, setAlbum } from '../actions/spotify';
import Immutable from 'immutable';

import Song from "./Song";

class SongList extends React.Component {
  render() {
    const { dispatch, spotify } = this.props;
    var songs = spotify.get("Data").albums.items.map(function(song){
      console.log(song.name);
      return (
          <div className="pure-u-md-1-3 pure-u-1-1 song">
          <a href={song.uri}><h4>{song.name}</h4></a>
          <img src={song.images[1].url} />
          </div>
        )
    })

    return (
      <div>
      <div className="pure-g">
        {songs || "Not Found"}
      </div>
      </div>
    )
  }
}

function select(state) {
  return {
    spotify: state.spotify
  }
}

export default connect(select)(SongList)
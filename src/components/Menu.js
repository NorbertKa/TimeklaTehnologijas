import React from 'react';

import { connect } from 'react-redux';
import { searchArtist, setArtist, setAlbum } from '../actions/spotify';
import Immutable from 'immutable';

class Menu extends React.Component {
	constructor(props){
		super(props);
		this.artistChange = this.artistChange.bind(this);
		this.songChange = this.songChange.bind(this);
	}
	artistChange(event){
		const { dispatch, spotify } = this.props;
		dispatch(setArtist(event.target.value));
		dispatch(searchArtist(event.target.value,spotify.get("Album")));
	}
	songChange(event){
		let albumName = event.target.value;
		if(event.target.value === "" || event.target.value === undefined){
			albumName = "*"
		}
		const { dispatch, spotify } = this.props;
		dispatch(setAlbum(event.target.value));
		dispatch(searchArtist(spotify.get("Artist"),albumName));
	}
	render() {
	return (
		<div className="navigation pure-form pure-g pure-menu pure-menu-horizontal pure-menu-fixed">
			<div className="pure-u-md-1-4"></div>
			<div className="pure-u-md-1-3 pure-u-1-2">
				<input
				 onChange={this.artistChange}
				 className="artist-input pure-input-1" type="text" placeholder="Artist" />
			</div>
			<div className="pure-u-md-1-6 pure-u-1-2">
				<input
				 onChange={this.songChange}
				 className="album-input pure-input-1" type="text" placeholder="Album" />
			</div>
			<div className="pure-u-md-1-4"></div>
		</div>
	  )
	}
}

function select(state) {
  return {
    spotify: state.spotify
  }
}

export default connect(select)(Menu)
import request from 'browser-request';

export function searchArtist(artist,album) {
	return dispatch => {
		return request({
			method: "GET",
			url: "https://api.spotify.com/v1/search?q=album:*" + album + "*%20artist:*" + artist + "*&type=album",
			json: true
		},function (err, res, body) {
			if(err){
				console.log(err);
			}
			dispatch(setData(body))
		})
	}
}

export function setArtist(artist) {
	return {
		type: "SET_ARTIST",
		artist: artist
	}
}

export function setAlbum(album) {
	return {
		type: "SET_ALBUM",
		album: album
	}
}

export function setData(data) {
	return {
		type: "SET_DATA",
		data: data
	}
}
import Immutable from 'immutable';

export default (state = Immutable.Map({"Album":"*","Data":{albums:{items:[]}}}), action) => {
	switch(action.type) {
		case "SET_DATA":
			return state.set("Data", action.data);
		case "SET_ARTIST":
			return state.set("Artist", action.artist);
		case "SET_ALBUM":
			return state.set("Album", action.album);
		default:
			return state;
	}
}
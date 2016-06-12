import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import spotify from './reducers/spotify';

console.log("LODAED STORE");

let app = combineReducers({
	spotify
});

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore);

let store = createStoreWithMiddleware(app);

export default store;
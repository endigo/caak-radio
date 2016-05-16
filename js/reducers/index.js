import { combineReducers } from 'redux';
import song from './SongReducer';
import player from './PlayerReducer';

const rootReducer = combineReducers({
	song,
	player
});

export default rootReducer;

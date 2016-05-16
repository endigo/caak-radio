import {
  PLAYER_STATUS_PLAYING,
  PLAYER_STATUS_PAUSED,
} from '../constants/ActionTypes';

const initialState = {
  status: PLAYER_STATUS_PAUSED,
};

export default function player(state = initialState, action) {
  switch (action.type) {
    case PLAYER_STATUS_PLAYING:
    case PLAYER_STATUS_PAUSED:
      return Object.assign({}, state, {
    		status: action.type
    	})

    default:
      return state;
  }
}

// import Frisbee from 'frisbee';
import * as types from '../constants/ActionTypes';

export function loadPlaylist(){
	// create a new instance of Frisbee
	// const api = new Frisbee({
	//   baseURI: 'http://localhost:8082',
	//   headers: {
	//     'Accept': 'application/json',
	//     'Content-Type': 'application/json'
	//   }
	// });
	return dispatch => {
	    dispatch({type: types.LOAD_PLAYLIST_REQUEST});
	    return fetch('http://192.168.1.4:8082/')
	    	.then(response => response.json())
	        .then(playlist => {
	          		dispatch({type: types.LOAD_PLAYLIST_REQUEST_SUCCESS, playlist})
	          	});
	  };
}

export function changePlayerStatus(type){
	return dispatch => dispatch({type});	
}

export function setPlayingSong(song){
	return dispatch => dispatch({type: types.SET_SONG_INFO, song});	
}
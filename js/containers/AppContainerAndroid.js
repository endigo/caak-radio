import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  StatusBar,
  Image,
  DeviceEventEmitter,
  Dimensions
} from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import RCTPlayer from 'react-native-player'

import Header from '../common/Header';
import Footer from '../common/Footer';
import Playlist from '../common/Playlist';

import * as songActions from '../actions/SongActions';
import * as types from '../constants/ActionTypes';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class AppContainer extends Component {

	constructor(props){
    super(props);

    this.state = {
      track: ''
    }
  }

  componentWillMount () {
    DeviceEventEmitter.addListener('error', this.onError)
    DeviceEventEmitter.addListener('end', this.onEnd)
    DeviceEventEmitter.addListener('idle', this.onIdle)
    DeviceEventEmitter.addListener('buffering', this.onBuffering)
    DeviceEventEmitter.addListener('ready', this.onReady)
    DeviceEventEmitter.addListener('preparing', this.onReady)
  }

  componentDidMount(){

  }

  play(url){
    RCTPlayer.prepare(url, true);
    this.props.changePlayerStatus(types.PLAYER_STATUS_PLAYING);
  }

  pause(){
    RCTPlayer.pause()
    this.props.changePlayerStatus(types.PLAYER_STATUS_PAUSED);
  }

  resume(){
    RCTPlayer.resume()
    this.props.changePlayerStatus(types.PLAYER_STATUS_PLAYING);
  }

  onBuffering () {
    console.log('on buffering...')
  }

  onIdle () {
    console.log('on idle...')
  }

  onError (err) {
    console.log('on error...', err)
  }

  onEnd () {
    // const {dispatch} = this.props
    // dispatch(changeSong(CHANGE_TYPES.NEXT))
  }

  onReady () {
    console.log('on ready...')
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          transclude={true}
          backgroundColor="#0077AA"
          barStyle="light-content"
          />
        <Header title="Radio"/>

        <View style={styles.infoContainer}>
          <Playlist {...this.props}
            play={this.play.bind(this)} />
        </View>
        <Footer  {...this.props}
          isPlaying={types.PLAYER_STATUS_PLAYING === this.props.status}
          resume={this.resume.bind(this)}
          pause={this.pause.bind(this)}
          track={this.state.track}/>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(1, 90, 127, .1)',
    flex: 1,
    flexDirection: 'column'
  },
  infoContainer: {
    flex: 1,
    height: SCREEN_HEIGHT,
    marginTop: 10,
    position: 'relative'
  }
});

// export default AppContainer
export default connect(
  state => ({
    playlist: state.song.playlist,
    song: state.song.song,
    status: state.player.status
  }),
  dispatch => bindActionCreators(songActions, dispatch)
)(AppContainer);

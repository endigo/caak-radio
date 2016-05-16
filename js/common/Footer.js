import React from 'React';
import Platform from 'Platform';
import StyleSheet from 'StyleSheet';
import TouchableOpacity from 'TouchableOpacity';
import View from 'View';
import Image from 'Image';
import Text from 'Text';

import Button from './Button';

class Footer extends React.Component {

  onPause(){
    this.props.pause()
  }

  onResume(){
    this.props.resume()
  }

	render(){
    if(!this.props.song)
      return null;

    let artist = '', track;
    let t = this.props.song.track.split('-');
    if(t.length) {
      artist = t[0];
      track = t[1]
    } 
    else track = this.props.track;
		return (
			<View style={styles.container}>
        {
          this.props.isPlaying ?
          <Button
            icon={require('./img/pause.png')}
            onPress={this.onPause.bind(this)}/> :
          <Button
            icon={require('./img/play.png')}
            onPress={this.onResume.bind(this)}/>
        }
        <View style={styles.infoContainer}>
            <Text style={styles.artist}>{artist}</Text>
            <Text style={styles.songName}>{track}</Text>
        </View>
        <Button
          icon={require('./img/forward.png')}/>
      </View>
		)
	}
}

let styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row'
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center'
  },
  artist: {
    fontSize: 12,
    color: '#bbb5d7'
  },
  songName: {
    color: '#757188'
  }
});

export default Footer;
import React from 'React';
import Platform from 'Platform';
import StyleSheet from 'StyleSheet';
import TouchableOpacity from 'TouchableOpacity';
import View from 'View';
import Image from 'Image';
import Text from 'Text';
import Dimensions from 'Dimensions';
import ListView from 'ListView';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Playlist extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playlist: []
    }

    this.play = this.play.bind(this);
  }

  componentDidMount(){
    let {playlist} = this.props;
    playlist.forEach(song => song.isPlaying = false);
    this.setState({
      playlist
    })
  }

  play(song, rowId){
    let {playlist} = this.state;
    playlist.forEach(song => song.isPlaying = false);

    playlist[rowId].isPlaying = true;
    
    this.setState({
      playlist
    });

    let url = `http://www.caak.mn/radio/Caak%20songs/${encodeURIComponent(song.track)}.mp3`;
    this.props.play(url);
    this.props.setPlayingSong(playlist[rowId]);
  }

  renderRow(song, sectionId, rowId){
    return (
      <TouchableOpacity onPress={this.play.bind(this, song, rowId)}>
        <View style={styles.card}>
          {
            song.isPlaying && 
            <View style={styles.status}>
              <Image source={require('./img/play.png')}/>
            </View>
          }
          <Text style={styles.title}>{song.track}</Text>
        </View>
      </TouchableOpacity>
    )
  }

	render(){
    let {playlist} = this.state;
    if(!playlist || !playlist.length)
      return null;

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    let dataSource = ds.cloneWithRows(playlist)

		return (
			<View style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow.bind(this)}
          />
      </View>
		)
	}
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_HEIGHT,
    marginLeft: 10,
    marginRight: 10,
  },
  card: {
    padding: 10,
    marginBottom: 3,
    backgroundColor: 'rgba(255, 255, 255, .4)',
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: '#222',
    flex: 1,
  },
  status: {
    marginRight: 5
  }
});

export default Playlist;
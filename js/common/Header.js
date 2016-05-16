import React from 'React';
import Platform from 'Platform';
import StyleSheet from 'StyleSheet';
import TouchableOpacity from 'TouchableOpacity';
import View from 'View';
import Image from 'Image';
import ToolbarAndroid from 'ToolbarAndroid';
import Dimensions from 'Dimensions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

class HeaderAndroid extends React.Component {

	render(){
		let actions = [
  //   {
		// 	title: 'Монгол',
		// 	show: 'always'
		// },{
  //     title: 'Гадаад',
  //     show: 'always'
  //   }
    ];

		// return (
		// 	<View style={[styles.toolbarContainer, this.props.style]}>
		// 		<ToolbarAndroid 
		// 			navIcon={require('./img/hamburger.png')}
		// 			onIconClicked={this.props.onMenuPress}
		// 			title={this.props.title}
		// 			titleColor='white'
		// 			actions={actions}
		// 			style={styles.toolbar}>
		// 		</ToolbarAndroid>
		// 	</View>
		// )
    return (
      <View style={[styles.toolbarContainer, this.props.style]}>
        <ToolbarAndroid 
          logo={require('./img/logo.png')}
          title={this.props.title}
          titleColor='white'
          actions={actions}
          style={styles.toolbar}>
        </ToolbarAndroid>
      </View>
    )
	}
}

let styles = StyleSheet.create({
  toolbarContainer: {
    // paddingTop: STATUS_BAR_HEIGHT,
    backgroundColor: '#0077AA'
  },
  toolbar: {
    height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
  },
  header: {
    height: 75,
    flex: 1
  },
  headerImage: {
    width: SCREEN_WIDTH,
    height: 75
  },  
});

const Header = Platform.OS === 'ios' ? null : HeaderAndroid;
Header.height = HEADER_HEIGHT;

export default Header;
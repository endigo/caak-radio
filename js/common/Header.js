import React from 'React';
import Platform from 'Platform';
import StyleSheet from 'StyleSheet';
import TouchableOpacity from 'TouchableOpacity';
import View from 'View';
import Image from 'Image';
import Text from 'Text';
import ToolbarAndroid from 'ToolbarAndroid';
import Dimensions from 'Dimensions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

class HeaderAndroid extends React.Component {
	render(){
		let actions = [];
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

class HeaderIOS extends React.Component {
	render(){
		return (
			<View style={[styles.toolbarContainer, this.props.style]}>
				<View style={[styles.toolbar, iosStyles.toolbar]}>
					<Image source={require('./img/logo.png')} style={iosStyles.logo}/>
					<Text style={iosStyles.title}>{this.props.title}</Text>
				</View>
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
}), iosStyles = StyleSheet.create({
  toolbar: {
		height: HEADER_HEIGHT,
		paddingTop: STATUS_BAR_HEIGHT/2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
  },
	logo: {
		marginRight: 5
	},
	title: {
		color: '#fff',
		fontSize: 24
	}
});

const Header = Platform.OS === 'ios' ? HeaderIOS : HeaderAndroid;
Header.height = HEADER_HEIGHT;

export default Header;

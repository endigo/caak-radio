import React from 'React';
import Platform from 'Platform';
import StyleSheet from 'StyleSheet';
import TouchableOpacity from 'TouchableOpacity';
import View from 'View';
import Image from 'Image';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

class Button extends React.Component {

	render(){
		let icon;
    if(this.props.icon){
      icon = <Image source={this.props.icon} style={styles.icon} />;
    }

		return (
			<TouchableOpacity 
        accessibilityTraits="button"
        activeOpacity={0.8}
        onPress={this.props.onPress}
        >
        { icon }
      </TouchableOpacity>
		)
	}
}

let styles = StyleSheet.create({
  container: {
    height: 50
  },
  icon: {
    margin: 8
  }
});

export default Button;
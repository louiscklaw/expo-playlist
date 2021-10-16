import * as React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {NavigationStackProp} from 'react-navigation-stack';

import {TouchableScale} from '../components';
import {defaultItem, Item} from '../data';

export class MainScreen extends React.Component {
  static defaultProps = {
    routeName: 'Detail',
  };

  render() {
    const {navigation, route} = this.props;
    const params = route?.params || navigation?.state?.params;
    const item: Item = params?.item || defaultItem;

    const onPress = () => {
      const {navigation, routeName} = this.props;
      navigation.navigate(routeName);
    };

    return (
      <>
        <TouchableScale style={styles.flex} onPress={this.onPress}>
          <View style={styles.container}>
            <SharedElement id={`${item.id}.image`}>
              <Image style={styles.image} source={item.image} />
            </SharedElement>
            <SharedElement id={`${item.id}.title`}>
              <Text style={styles.text}>{`${item.title}`}</Text>
            </SharedElement>
            <Text style={styles.caption}>tap me</Text>
          </View>
        </TouchableScale>
      </>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
  caption: {
    fontSize: 20,
    opacity: 0.5,
  },
  image: {
    width: 240,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 20,
  },
});

import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

import {TouchableScale} from '../components';
import {Item, defaultItem} from '../data';
import {DetailComponent} from './DetailComponent';
import {getDetailSharedElements} from './getDetailSharedElements';

export const DetailScreen = props => {
  const {navigation, route, modal, onPress} = props;
  const params = route?.params || navigation?.state?.params;
  const item: Item = params?.item || defaultItem;
  const content = (
    <DetailComponent item={item} navigation={navigation} modal={modal} />
  );
  return onPress ? (
    <TouchableScale
      onPress={() => onPress({navigation, item})}
      style={StyleSheet.absoluteFill}>
      {content}
    </TouchableScale>
  ) : (
    content
  );
};

DetailScreen.navigationOptions = {
  title: 'Boys will be boys',
};

// Add the `sharedElements` function to the component, which
// should return a list of shared-elements to transition.
// The `sharedElements` function is called whenever you navigate
// to or from this screen. You can use the provided navigation
// states or trigger or disable animations.
DetailScreen.sharedElements = getDetailSharedElements;

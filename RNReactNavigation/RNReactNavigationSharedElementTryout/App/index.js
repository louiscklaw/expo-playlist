import * as React from 'react';
import {Button, View, Text} from 'react-native';

import {Platform, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Tests, Test} from './components';
import DefaultStack from './tests/DefaultStack';
// import DefaultStackV4 from './tests/DefaultStack.v4';

if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
}

function App() {
  return (
    <SafeAreaProvider>
      <Tests>
        <Test
          title="DefaultStack"
          // ComponentV4={DefaultStackV4}
          Component={DefaultStack}
        />
      </Tests>
    </SafeAreaProvider>
  );
}

export default App;

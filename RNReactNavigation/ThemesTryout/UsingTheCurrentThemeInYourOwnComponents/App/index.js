import * as React from 'react';
import {Linking, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={state =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }>
      {/* ... */}
    </NavigationContainer>
  );
}

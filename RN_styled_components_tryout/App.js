import React from 'react'
import {View, StyleSheet, Button} from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

const StyledButton = styled.Button`
  color: gold;
`

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 40px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;


const PressableButton = ({ onPress, bgColor, title }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

class MyReactNativeComponent extends React.Component {
  onPress = () => {
    console.log('helloworld')
  }

  render() {
    return (
      <StyledView>
        <StyledText>Hello World!</StyledText>
        <PressableButton
          onPress={() => true}
          title='First button'
          bgColor='papayawhip'
        />

      </StyledView>
    )
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <MyReactNativeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

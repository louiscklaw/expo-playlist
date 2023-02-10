import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { Button as PButton } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { Text as PText } from 'react-native-paper';
import { BottomNavigation } from 'react-native-paper';

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}


const MusicRoute = () => <PText>Music</PText>;
const AlbumsRoute = () => <PText>Albums</PText>;
const RecentsRoute = () => <PText>Recents</PText>;
const NotificationsRoute = () => <PText>Notifications</PText>;



export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const authPasswordInput = useRef<TextInput>()
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { authEmail, authPassword, setAuthEmail, setAuthPassword, setAuthToken, validationErrors },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credientials from keychain or storage
    // and pre-fill the form fields.
    setAuthEmail("ignite@infinite.red")
    setAuthPassword("ign1teIsAwes0m3")
  }, [])

  const errors: typeof validationErrors = isSubmitted ? validationErrors : ({} as any)

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (Object.values(validationErrors).some(v => !!v)) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
  }

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  useEffect(() => {
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });


  return (
    <Screen preset="auto" contentContainerStyle={$screenContentContainer} safeAreaEdges={["top", "bottom"]}>
      <Text testID="login-heading" tx="loginScreen.signIn" preset="heading" style={$signIn} />
      <Text tx="loginScreen.enterDetails" preset="subheading" style={$enterDetails} />
      {attemptsCount > 2 && <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />}

      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        labelTx="loginScreen.emailFieldLabel"
        placeholderTx="loginScreen.emailFieldPlaceholder"
        helper={errors?.authEmail}
        status={errors?.authEmail ? "error" : undefined}
        onSubmitEditing={() => authPasswordInput.current?.focus()}
      />

      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        labelTx="loginScreen.passwordFieldLabel"
        placeholderTx="loginScreen.passwordFieldPlaceholder"
        helper={errors?.authPassword}
        status={errors?.authPassword ? "error" : undefined}
        onSubmitEditing={login}
        RightAccessory={PasswordRightAccessory}
      />


    <PText variant="displayLarge">Display Large</PText>
    <PText variant="displayMedium">Display Medium</PText>
    <PText variant="displaySmall">Display small</PText>

    <PText variant="headlineLarge">Headline Large</PText>
    <PText variant="headlineMedium">Headline Medium</PText>
    <PText variant="headlineSmall">Headline Small</PText>

    <PText variant="titleLarge">Title Large</PText>
    <PText variant="titleMedium">Title Medium</PText>
    <PText variant="titleSmall">Title Small</PText>

    <PText variant="bodyLarge">Body Large</PText>
    <PText variant="bodyMedium">Body Medium</PText>
    <PText variant="bodySmall">Body Small</PText>

    <PText variant="labelLarge">Label Large</PText>
    <PText variant="labelMedium">Label Medium</PText>
    <PText variant="labelSmall">Label Small</PText>



      <PButton icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        常勉旋72依過らつ。門むば隊就メツ
      </PButton>

      <Chip icon="information" onPress={() => console.log('Pressed')}>
        常勉旋72依過らつ。
      </Chip>


      <Text tx={'123321'} />

      <Button testID="login-button" tx="loginScreen.tapToSignIn" style={$tapButton} preset="reversed" onPress={login} />

      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $signIn: TextStyle = {
  marginBottom: spacing.small,
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.large,
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.medium,
}

const $textField: ViewStyle = {
  marginBottom: spacing.large,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
}

// @demo remove-file

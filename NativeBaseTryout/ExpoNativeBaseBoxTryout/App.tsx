import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  NativeBaseProvider,
  Box,
  useColorModeValue,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  Icon,
  HStack
} from 'native-base'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

import styles from './styles'

const CompositionExample = () => {
  return (
    <Box width={72} bg={useColorModeValue('gray.50', 'gray.700')} shadow={1}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg'
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="red.500"
          _text={{
            color: 'white',
            fontWeight: '700',
            fontSize: 'xs'
          }}
          position="absolute"
          bottom={0}
          px={2}
          py={1}
        >
          ハ作
        </Center>
        <Center
          p={1}
          rounded="full"
          bg="red.500"
          boxSize={10}
          position="absolute"
          right={0}
          m={2}
          _text={{
            color: 'white',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 'xs'
          }}
        >
          27 MAR
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            落国がどゅト備初
          </Heading>
          <Heading size="xs" color={useColorModeValue('red.500', 'red.300')} fontWeight="500" ml={-0.5} mt={-1}>
            ハウワ応92勤常勉
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          待進變果沒致友環健問水法代人苦天。 業立臺四即文善公作有往，等怕準命小電個。 査今聞光洋後化外財強主職。
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Icon as={<MaterialIcons name="access-time" />} color="gray.500" size="sm" />
            <Text ml={1} color="gray.500" fontWeight="500">
              6 トカハ
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Icon as={<Ionicons name="ios-chatbubbles" />} color="gray.500" size="sm" />

            <Text ml={1} color="gray.500" fontWeight="500">
              39 トカハ作
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  )
}

const WithLinearGradient = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 0],
          end: [1, 0]
        }
      }}
      p={12}
      rounded="lg"
      _text={{
        fontSize: 'md',
        fontWeight: 'bold',
        color: 'white'
      }}
    >
      <Text>This is a Box with Linear Gradient</Text>
    </Box>
  )
}

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <NativeBaseProvider config={config}>
        <Box>Hello world</Box>
        <Center flex={1}>
          <WithLinearGradient />
          <CompositionExample />
        </Center>
      </NativeBaseProvider>
    </View>
  )
}

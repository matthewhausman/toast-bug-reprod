import {
  AnimatePresence,
  Button,
  H2,
  H4,
  Paragraph,
  ScrollView,
  Separator,
  Theme,
  XStack,
  YStack,
  isWeb,
  useMedia,
  useToastController,
  validToken,
} from '@my/ui'
import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'

export function HomeScreen() {
  const toastController = useToastController()

  return (
    <XStack maw={1480} als="center" f={1}>
      <ScrollView f={3} fb={0}>
        <YStack
          key="home-animation-test"
          animation="200ms"
          enterStyle={{ o: 0, x: -40 }}
          x={0}
          o={1}
          gap="$3"
          pt="$5"
          pb="$8"
        >
          <Button
            onPress={() => {
              toastController.show('testing', { message: 'testing' })
            }}
          >
            Show Toast
          </Button>
        </YStack>
      </ScrollView>
    </XStack>
  )
}

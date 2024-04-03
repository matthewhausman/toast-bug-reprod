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
import { ArrowRight, DollarSign, Pencil, User, Users } from '@tamagui/lucide-icons'
import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/link'
import { useRouter } from 'solito/router'

const defaultAuthors = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=67/32/32?ca=1',
  },
  {
    id: 2,
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?img=30/32/32?ca=1',
  },
]

export function HomeScreen() {
  const router = useRouter()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => {
      setShow(true)
    }, 5000)
    return () => clearTimeout(t)
  }, [])

  const toastController = useToastController()
  if (!show) return null
  return (
    <XStack maw={1480} als="center" f={1}>
      <ScrollView f={3} fb={0}>
        {/* <AnimatePresence> */}

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
              // router.push('/about')
              toastController.show('testing', { message: 'testing' })
            }}
          >
            Show Toast
          </Button>
        </YStack>

        {/* </AnimatePresence> */}
      </ScrollView>
    </XStack>
  )
}

const halfMinusSpace = validToken(
  Platform.select({
    web: 'calc(50% - 12px)',
    native: '53%',
  })
)

const quarterMinusSpace = validToken(
  Platform.select({
    web: 'calc(25% - 12px)',
    native: '21%',
  })
)

const feedCardWidthMd = validToken(
  Platform.select({
    web: 'calc(33.33% - 12px)',
    native: '32%',
  })
)

function ScrollAdapt({ children }: { children: React.ReactNode }) {
  const { md } = useMedia()
  return md ? (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <>{children}</>
  )
}

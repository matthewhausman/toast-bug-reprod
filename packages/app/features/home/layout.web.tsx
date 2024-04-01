import {
  Adapt,
  Avatar,
  Button,
  ButtonProps,
  Popover,
  Separator,
  SizableText,
  StackProps,
  Theme,
  XStack,
  YStack,
  getTokens,
  useThemeName,
  validToken,
} from '@my/ui'
import { Menu, Plus } from '@tamagui/lucide-icons'
import { useRouter as useNextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SolitoImage } from 'solito/image'
import { Link, useLink } from 'solito/link'

import { NavTabs } from './components/nav-tabs.web'

export type HomeLayoutProps = {
  children?: React.ReactNode
  padded?: boolean
  fullPage?: boolean
}

export const HomeLayout = ({ children, fullPage = false, padded = false }: HomeLayoutProps) => {
  return <></>
}

export const MobileNavbar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const router = useNextRouter()
  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])
  return (
    <Popover open={open} onOpenChange={setOpen} size="$5" stayInFrame={{ padding: 20 }}>
      <Popover.Trigger asChild>
        <Button
          chromeless
          p="$2"
          onPress={() => setOpen(!open)}
          theme={open ? 'alt1' : null}
          icon={<Menu size={32} />}
        />
      </Popover.Trigger>

      <Adapt platform="web" when="sm">
        <Popover.Sheet zIndex={100000000} modal dismissOnSnapToBottom>
          <Popover.Sheet.Frame>
            <Popover.Sheet.ScrollView>
              <Adapt.Contents />
            </Popover.Sheet.ScrollView>
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay zi={100} />
        </Popover.Sheet>
      </Adapt>

      <Popover.Content
        bw={1}
        boc="$borderColor"
        enterStyle={{ x: 0, y: -10, o: 0 }}
        exitStyle={{ x: 0, y: -10, o: 0 }}
        x={0}
        y={0}
        o={1}
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
        p={0}
        mah={validToken('80vh')}
        elevate
        zi={100000000}
      >
        <Popover.Arrow bw={1} boc="$borderColor" />

        <Popover.ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <YStack miw={230} p="$3" ai="flex-end">
            {children}
          </YStack>
        </Popover.ScrollView>
      </Popover.Content>
    </Popover>
  )
}

const CtaButton = (props: ButtonProps) => (
  <Theme inverse>
    <Button
      {...useLink({ href: '/create' })}
      size="$3"
      space="$1.5"
      my="$-1"
      icon={Plus}
      br="$10"
      {...props}
    >
      Create
    </Button>
  </Theme>
)

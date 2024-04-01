import { Avatar, Circle, ColorTokens, Theme, YStack, validToken } from '@my/ui'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { LinearGradient } from '@tamagui/linear-gradient'
import { Home, Plus } from '@tamagui/lucide-icons'
import { Stack, Tabs } from 'expo-router'
import { SolitoImage } from 'solito/image'
import { useRouter } from 'solito/router'

export default function Layout() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ size, color }) => <Home col={color as ColorTokens} size={size} />,
          }}
        />
        <Tabs.Screen
          name="_create"
          listeners={({ navigation }: any) => ({
            tabPress: (event: any) => {
              event.preventDefault()
              navigation.navigate('create')
            },
          })}
          options={{
            title: 'New',
            tabBarIcon: PlusButton,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ProfileTabIcon,
          }}
        />
      </Tabs>
    </>
  )
}

type TabBarIconProps = Parameters<Exclude<BottomTabNavigationOptions['tabBarIcon'], undefined>>[0]

const ProfileTabIcon = ({ color, size }: TabBarIconProps) => {
  return <></>
}

const PlusButton = ({ size }: TabBarIconProps) => {
  const router = useRouter()

  return (
    <Theme inverse>
      <Circle
        pos="absolute"
        b={5}
        bg="$color1"
        shac="$shadowColor"
        shar={10}
        shof={{
          height: -5,
          width: 0,
        }}
        w={size + 34}
        h={size + 34}
      />
      <LinearGradient
        onPress={() => router.push('/create')}
        colors={['$gray6', '$gray7']}
        start={[1, 1]}
        end={[0.8, 0]}
        w={size + 34}
        h={size + 34}
        br="$10"
        pos="absolute"
        b={5}
        pressStyle={{
          rotate: '20deg',
        }}
      />
      <YStack
        pos="absolute"
        b={5}
        jc="center"
        ai="center"
        animation="quick"
        pe="none"
        h={size + 34}
      >
        <Plus col="$color" size={size + 20} />
      </YStack>
    </Theme>
  )
}

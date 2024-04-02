import { Button, Paragraph, YStack, useToastController } from '@my/ui'
import { Provider } from 'app/provider'
import { ToastProvider } from 'app/provider/toast'
import { ToastViewport } from 'app/provider/toast/ToastViewport.native'

export const AboutScreen = () => {
  const toastController = useToastController()
  return (
    <ToastProvider portalHost="about-portal">
      <YStack gap="$4" p="$4">
        <Button
          onPress={() => {
            toastController.show('testing toast', { viewportName: 'about-portal' })
          }}
        >
          Show Toast
        </Button>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem neque maxime
          soluta nostrum unde eligendi, culpa qui exercitationem modi quasi debitis voluptatibus,
          deleniti porro! Nihil magni dicta neque aliquid.
        </Paragraph>

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem neque maxime
          soluta nostrum unde eligendi, culpa qui exercitationem modi quasi debitis voluptatibus,
          deleniti porro! Nihil magni dicta neque aliquid.
        </Paragraph>

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem neque maxime
          soluta nostrum unde eligendi, culpa qui exercitationem modi quasi debitis voluptatibus,
          deleniti porro! Nihil magni dicta neque aliquid.
        </Paragraph>
      </YStack>
    </ToastProvider>
  )
}

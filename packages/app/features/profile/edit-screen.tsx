import { Avatar, FullscreenSpinner, SubmitButton, Theme, YStack, useToastController } from '@my/ui'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { createParam } from 'solito'
import { SolitoImage } from 'solito/image'
import { useRouter } from 'solito/router'
import { z } from 'zod'

const { useParams } = createParam<{ edit_name?: '1'; edit_about?: '1' }>()
export const EditProfileScreen = () => {
  return <></>
}

const ProfileSchema = z.object({
  name: formFields.text.describe('Name // John Doe'),
  about: formFields.textarea.describe('About // Tell us a bit about yourself'),
})

const EditProfileForm = ({
  initial,
  userId,
}: {
  initial: { name: string | null; about: string | null }
  userId: string
}) => {
  const { params } = useParams()

  const toast = useToastController()
  const queryClient = useQueryClient()
  const router = useRouter()

  return (
    <SchemaForm
      schema={ProfileSchema}
      props={{
        name: {
          autoFocus: !!params?.edit_name,
        },
        about: {
          autoFocus: !!params?.edit_about,
        },
      }}
      defaultValues={{
        name: initial.name ?? '',
        about: initial.about ?? '',
      }}
      onSubmit={(values) => undefined}
      renderAfter={({ submit }) => (
        <Theme inverse>
          <SubmitButton onPress={() => submit()}>Update Profile</SubmitButton>
        </Theme>
      )}
    >
      {(fields) => (
        <>
          <YStack mb="$10"></YStack>
          {Object.values(fields)}
        </>
      )}
    </SchemaForm>
  )
}

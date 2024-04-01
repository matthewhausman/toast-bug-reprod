import { Button, FormWrapper, H2, Paragraph, SubmitButton, Text, Theme, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'

import { useEffect } from 'react'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { z } from 'zod'

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

const ResetPasswordSchema = z.object({
  email: formFields.text.email().describe('Email // your@email.acme'),
})

export const ResetPasswordScreen = () => {
  return <></>
}

const CheckYourEmail = () => {
  const email = useWatch<z.infer<typeof ResetPasswordSchema>>({ name: 'email' })
  const { reset } = useFormContext()

  return (
    <FormWrapper>
      <FormWrapper.Body>
        <YStack gap="$3">
          <H2>Check Your Email</H2>
          <Paragraph theme="alt1">
            We&apos;ve sent you a reset link. Please check your email ({email}) and confirm it.
          </Paragraph>
        </YStack>
      </FormWrapper.Body>
      <FormWrapper.Footer>
        <Button themeInverse icon={ChevronLeft} br="$10" onPress={() => reset()}>
          Back
        </Button>
      </FormWrapper.Footer>
    </FormWrapper>
  )
}

const SignInLink = () => {
  const email = useWatch<z.infer<typeof ResetPasswordSchema>>({ name: 'email' })

  return (
    <Link href={`/sign-in?${new URLSearchParams(email ? { email } : undefined)}`}>
      <Paragraph ta="center" theme="alt1">
        Done resetting? <Text textDecorationLine="underline">Sign in</Text>
      </Paragraph>
    </Link>
  )
}

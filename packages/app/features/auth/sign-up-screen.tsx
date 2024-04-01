import {
  Button,
  FormWrapper,
  H2,
  Paragraph,
  SubmitButton,
  Text,
  Theme,
  YStack,
  isWeb,
} from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useEffect } from 'react'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { z } from 'zod'

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

const SignUpSchema = z.object({
  email: formFields.text.email().describe('Email // your@email.acme'),
  password: formFields.text.min(6).describe('Password // Choose a password'),
})

export const SignUpScreen = () => {
  const updateParams = useUpdateParams()
  const { params } = useParams()

  useEffect(() => {
    if (params?.email) {
      updateParams({ email: undefined }, { web: { replace: true } })
    }
  }, [params?.email, updateParams])

  const form = useForm<z.infer<typeof SignUpSchema>>()

  return <></>
}

const SignInLink = () => {
  const email = useWatch<z.infer<typeof SignUpSchema>>({ name: 'email' })

  return (
    <Link href={`/sign-in?${new URLSearchParams(email ? { email } : undefined).toString()}`}>
      <Paragraph ta="center" theme="alt1" mt="$2">
        Already signed up? <Text textDecorationLine="underline">Sign in</Text>
      </Paragraph>
    </Link>
  )
}

const CheckYourEmail = () => {
  const email = useWatch<z.infer<typeof SignUpSchema>>({ name: 'email' })
  const { reset } = useFormContext()

  return (
    <FormWrapper>
      <FormWrapper.Body>
        <YStack gap="$3">
          <H2>Check Your Email</H2>
          <Paragraph theme="alt1">
            We&apos;ve sent you a confirmation link. Please check your email ({email}) and confirm
            it.
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

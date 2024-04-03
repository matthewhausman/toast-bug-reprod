import { Button, H2, Paragraph, Text, Theme, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'

import { useEffect } from 'react'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { z } from 'zod'

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

export const ResetPasswordScreen = () => {
  return <></>
}

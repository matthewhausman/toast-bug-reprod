import { useEffect } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'
import { z } from 'zod'

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

export const SignInScreen = () => {
  const router = useRouter()
  const { params } = useParams()
  const updateParams = useUpdateParams()

  useEffect(() => {
    // remove the persisted email from the url, mostly to not leak user's email in case they share it
    if (params?.email) {
      updateParams({ email: undefined }, { web: { replace: true } })
    }
  }, [params?.email, updateParams])

  return <></>
}

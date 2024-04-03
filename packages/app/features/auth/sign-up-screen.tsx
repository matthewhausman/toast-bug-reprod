import { useEffect } from 'react'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { z } from 'zod'

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

export const SignUpScreen = () => {
  const updateParams = useUpdateParams()
  const { params } = useParams()

  useEffect(() => {
    if (params?.email) {
      updateParams({ email: undefined }, { web: { replace: true } })
    }
  }, [params?.email, updateParams])

  return <></>
}

import { useField } from 'vee-validate'
import * as yup from 'yup'

export function useValidationFields() {
  const { value: email, errorMessage: eError } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Please enter your email.')
      .email('Please enter your email.')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Please enter a valid email address.')
  )

  const { value: password, errorMessage: pError } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Please enter your password.')
      .matches(/\w*[A-Z]\w*/, 'Password must have one capital letter')
      .min(8, ({ min }) => `Password must contain at least ${min} characters`)
  )

  return {
    email,
    password,
    eError,
    pError
  }
}

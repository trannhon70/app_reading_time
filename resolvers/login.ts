import * as yup from 'yup'
export const schema = yup.object().shape({
  email: yup.string().email('Email is valid.').required('Enter email.'),
  password: yup.string().required('Enter password.')
})

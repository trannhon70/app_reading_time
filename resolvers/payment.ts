import * as yup from 'yup'
export const schema = yup.object().shape({
  product: yup.string().required('Select product.'),
  name: yup.string().required('Enter name.'),
  phone_number: yup.string().required('Enter phone.'),
  email: yup.string().required('Enter email.'),
  start_day: yup.string().required('Enter start day.'),
  agree: yup.boolean(),
  days: yup.array().notRequired(),
  timeOfDays: yup.object().notRequired()
})

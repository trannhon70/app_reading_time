import * as yup from 'yup'
export const schema = yup.object().shape({
  name: yup.string().required('Enter fullname.'),
  avatar: yup.object().shape({
    uri: yup.string().notRequired()
  })
})

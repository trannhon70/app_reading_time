import * as yup from 'yup'
export const schemaStep1 = yup.object().shape({
  phone: yup
    .string()
    .test('phone', 'Phone is valid.', (value: string) => {
      if (!value) return true
      const reg = /((84|0[3|5|7|8|9])+([0-9]{8})\b)|(1[8|9]00)+([0-9]{4}\b)/g
      return !!reg.test(value.toString())
    })
    .required('Enter phone number.'),
  DOB: yup.string().required('Enter birth day.'),
  isLuceteAccount: yup.boolean().nonNullable(),
  emailLucete: yup.string().test({
    name: 'isLuceteAccount',
    exclusive: false,
    params: {},
    message: 'Enter lucete account',
    test: function (value) {
      if (!!this.parent.isLuceteAccount) return !!value
      return !value
    }
  })
})

export const schemaStep2 = yup.object().shape({
  studentName: yup.string().required('Enter student name.'),
  parentName: yup.string().required('Enter parent name.'),
  studyTime: yup.string().required('Choose study time.')
})
export const schemaStep3 = yup.object().shape({
  email: yup.string().email('Email must be a valid email.').required('Enter your email.'),
  password: yup.string().required('Password is required.'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.')
    .required('Password confirm is required.')
})

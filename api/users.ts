
import instance from './config'

const Login = async (body: any) => {
  const response = await instance.post('/auth/login', body)
  return response.data
}

const UserApi = {
  Login
}

export default UserApi
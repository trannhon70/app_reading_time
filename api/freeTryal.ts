import instance from './config'

const createFreeTryal = async (body: any) => {
  const response = await instance.post('/mobile/courses/create-free-trial', body)
  return response.data
}

const FreeTryalApi = {
  createFreeTryal
}

export default FreeTryalApi
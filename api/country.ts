
import instance from './config'

const getAllCountry = async () => {
  const response = await instance.get('/countries/list')
  return response.data
}

const CountryApi = {
  getAllCountry
}

export default CountryApi
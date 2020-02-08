import { API_ENDPOINTS } from '../constants'
import request from '../utils/request'

export interface CreateClientPayload {
  key: string, // api key
  domain?: string // api url
}

/**
 * Initializes the connection to the API Domain and validates the API KEY
 */
export const createClient = async ({ key, domain }: CreateClientPayload) => {
  if (!key) throw new Error('An API KEY is required to connect.')

  const url = `${domain}/${API_ENDPOINTS.GET_BLOG}?key=${key}`

  try {
    const data = await request(url)

    return data

  } catch (error) {
    throw new Error(error)
  }
}
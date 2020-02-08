import { API_ENDPOINTS } from '../constants'
import request from '../utils/request'

export interface CreateClientPayload {
  key: string, // api key
  domain?: string // api url
}

/**
 * Initializes the connection to the API Domain and validates the API KEY
 */
export class VictoriaClient {
  key: string
  domain: string | undefined

  constructor (key: string, domain?: string) {
    this.key = key
    this.domain = domain || 'http://127.0.0.1:3001'
  }

  createClient = async () => {
    if (!this.key) throw new Error('An API KEY is required to connect.')

    const url = `${this.domain}/${API_ENDPOINTS.GET_BLOG}?key=${this.key}`

    try {
      const data = await request(url)

      return data

    } catch (error) {
      throw new Error(error)
    }
  }

  getPostByID = async (id: string) => {
    if (!id) throw new Error('ID is missing.')

    const url = `${this.domain}/${API_ENDPOINTS.GET_POST_BY_ID}/${id}`

    try {
      const post = await request(url)

      return post

    } catch (error) {
      throw new Error(error)
    }
  }

}
import request from '../utils/request'


export class VictoriaClient {
  consumerKey: string
  domain: string | undefined

  constructor(consumerKey: string, domain?: string) {
    this.consumerKey = consumerKey
    this.domain = domain || 'http://127.0.0.1:3000'
  }

  createClient = async () => {
    if (!this.consumerKey) throw new Error('A consumer api key is required to create a client')

    const url = `${this.domain}/blog?key=${this.consumerKey}`
    try {
      return await request(url)
    } catch (error) {
      throw new Error(error)
    }
  }

  getPostByID = async (id: string) => {
    if (!id) throw new Error('Post ID is missing')

    const url = `${this.domain}/post/${id}?key=${this.consumerKey}`
    try {
      return await request(url)
    } catch (error) {
      throw new Error(error)
    }
  }
}
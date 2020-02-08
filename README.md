# Victoria SDK

Victoria SDK provides an easy to access interface for frontend applications consuming data from the core API.


## Installation

```bash
npm i victoria-sdk
```

or


```bash
yarn add victoria-sdk
```

Example usage:

```ts

import Victoria from 'victoria-sdk'

try {
  const key = 'my_victoria_api_key'
  // Only Specify the domain if you're developing localy
  const domain = 'http://127.0.0.1:3001'

  const victoria = new Victoria.VictoriaClient(key, domain)

  const client = await victoria.createClient()

  console.log(client) // blog data
} catch (err) {
  console.error(err)
}
``` 

Getting a post by ID

```ts
try {
  const posts = await client.getPostByID('some_random_post_id')

  console.log(posts) // Render posts
} catch (error) {
  console.error(err)
}
```

WIP...
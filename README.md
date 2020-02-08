<div align="center">
    <img alt="styled-components" src="./victoria-logo-simple.png" height="150px" />
</div>

<br />

<div align="center">
  <strong>✨ Victoria SDK ✨.</strong>
  <br />
  <br />
</div>

<br />

Victoria SDK provides an easy to access interface for frontends


Example usage:

```ts
import Victoria from '@victoria/sdk

try {
  // Only Specify the domain if you're developing localy
  const client = await Victoria.createClient({ key: 'my_victoria_api_key', domain: 'http://127.0.0.1:3001' })

  console.log(client) // blog data
} catch (err) {
  console.error(err)
}
``` 

Getting all of the account posts.

```ts
try {
  const posts = await Victoria.getPosts()

  console.log(posts) // Render posts
} catch (error) {
  console.error(err)
}
```

WIP...
import fastify from 'fastify'

const server = fastify({
  ignoreTrailingSlash: true,
  requestTimeout: 30000,
})

server.get('/api/ping', async (request, reply) => {
  console.log('ping')
  return 'pong\n'
})

server.listen({ port: 8080, host: 'localhost' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

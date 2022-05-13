import express from 'express'
import { createServer, Server as HttpServer } from 'http'
import { Server } from './api/server'

// Init express server
const app: express.Application = new Server().app
const server: HttpServer = createServer(app)
const PORT = '6006'

// Start express server
// server.listen(env.NODE_PORT);
server.listen(PORT)
server.on('listening', () => {
  // logger.info(`node server is listening on port ${env.NODE_PORT} in ${env.NODE_ENV} mode`);
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${PORT}`)
})

server.on('error', console.error)

// server.on("close", () => {});

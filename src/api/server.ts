import express from 'express'
import { initRestRoutes } from './routes'

export class Server {
  private readonly application: express.Application = express()

  public constructor() {
    initRestRoutes(this.application)
  }

  /**
   * Get Express app
   *
   * @returns {express.Application} Returns Express app
   */
  public get app(): express.Application {
    return this.application
  }
}

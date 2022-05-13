import { Request, Response, Router } from 'express'
import { registerApiRoutes } from './components'
import { registerMiddleware } from './middleware'

/**
 * Init Express REST routes
 *
 * @param {Router} router
 * @returns {void}
 */
export const initRestRoutes = (router: Router): void => {
  const prefix = '/api/v1'

  router.get(prefix, (_: Request, res: Response) => res.send('SERVER RUNNING'))

  registerMiddleware(router)
  registerApiRoutes(router, prefix)
  // registerErrorHandler(router);
}

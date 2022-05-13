import cors from 'cors'
import { json, Router } from 'express'

/**
 * Init Express middleware
 *
 * @param {Router} router
 * @returns {void}
 */
export const registerMiddleware = (router: Router): void => {
  router.use(json())
  router.use(cors({ origin: ['http://localhost:6006'] }))
}

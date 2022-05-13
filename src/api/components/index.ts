import { Router } from 'express'
import { MiFloraRoutes } from './miflora/routes'

export const registerApiRoutes = (router: Router, prefix = ''): void => {
  router.use(`${prefix}/miflora`, new MiFloraRoutes().router)
}

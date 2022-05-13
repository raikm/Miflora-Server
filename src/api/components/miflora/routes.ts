/* eslint-disable @typescript-eslint/no-misused-promises, @typescript-eslint/unbound-method, jsdoc/check-indentation */

import { Router } from 'express'
import { MiFloraController } from './controller'

export class MiFloraRoutes {
  readonly controller = new MiFloraController()
  readonly router: Router = Router({ mergeParams: true })

  constructor() {
    this.initRoutes()
  }

  initRoutes(): void {
    // http://localhost:6006/api/v1/miflora/findNewSensors
    this.router.get(
      '/findNewSensors',
      this.controller.getNonConnectedBluetoothSensors
    )
  }
}

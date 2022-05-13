import { Request, Response } from 'express'
import { MiFloraService } from './service'

export class MiFloraController {
  async getNonConnectedBluetoothSensors(
    _req: Request,
    res: Response
  ): Promise<Response> {
    const service = new MiFloraService()
    const newDevices = await service.getNonConnectedBluetoothDevices()

    return res.status(200).json(newDevices)
  }

  async sendBlink(req: Request, res: Response): Promise<Response> {
    const service = new MiFloraService()
    service.blink(req.params.address)

    return res.status(200).json('bliniking')
  }
}

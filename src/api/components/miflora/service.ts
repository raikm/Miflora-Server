import axios from 'axios'
// @ts-ignore
import miflora from 'miflora'
import { MiFloraDevice, PlantData } from '../../../../types/miflora'

export class MiFloraService {
  readonly Duration = 30000

  async search(intervall: number): Promise<MiFloraDevice[]> {
    const devices = (await miflora.discover()) as MiFloraDevice[]
    return devices
  }

  public async getNonConnectedBluetoothDevices() {
    const nearbyBluetoothDevices = await this.search(1)
    const initializedDevices = (
      await axios.get('http://192.168.1.217:8080/getAllPlants/?format=json')
    ).data as PlantData[]

    let newDevices: MiFloraDevice[] = []

    nearbyBluetoothDevices.forEach((device) => {
      if (
        initializedDevices.find(
          (plant) =>
            plant.address.toLocaleUpperCase() ===
            device.address.toLocaleUpperCase()
        ) === undefined
      ) {
        newDevices.push(device)
      }
    })
    console.table(initializedDevices)
    console.log(newDevices.map((d) => d.address))
    return newDevices.map((d) => d.address.toLocaleUpperCase())
  }

  public async blink(address: string) {
    console.log('> scanning for a max of %s seconds', this.Duration / 1000)
    try {
      const devices = (await miflora.discover({
        addresses: [address],
      })) as MiFloraDevice[]

      const device = devices.find((d) => d.address === address)

      if (device) {
        await device.connect()
        await delay(3000)
        await device.blink()
      } else {
        console.log('sensor not found')
      }
    } catch (error) {
      console.error(error)
    }
  }
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

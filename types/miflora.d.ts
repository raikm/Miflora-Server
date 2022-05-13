export interface MiFloraDevice {
  connect()
  blink()
  name: string
  address: string
  lastDiscovery: number
}
export interface PlantData {
  id: number
  name: string
  address: string
  version: string
}

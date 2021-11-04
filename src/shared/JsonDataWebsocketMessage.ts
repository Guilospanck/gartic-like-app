export type JsonData = {
  username: string
  room: string
  message: string
  date: string
  close: boolean,
  canvasCoordinates?: string
  canvasConfigs?: string // CanvasConfig
}

export type CanvasConfigType = {
  lineCap: string,
  strokeStyle: string,
  lineWidth: number
}

export type CanvasConfigsAndCoordinatesPayload = {
  configs: CanvasConfigType,
  coordinates: Number[][]
}
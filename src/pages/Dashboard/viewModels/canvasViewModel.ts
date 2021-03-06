import React, { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { JsonData } from "~/shared/JsonDataWebsocketMessage"
import { DashboardContext } from "../context/dashboardContext"

interface MousePositionInterface {
  x: number
  y: number
}

export interface IUseCanvasViewModel {
  startDrawing: ({ nativeEvent }: { nativeEvent: MouseEvent }) => void,
  finishDrawing: () => void,
  draw: ({ nativeEvent }: { nativeEvent: MouseEvent }) => void,
  canvasRef: React.MutableRefObject<any>
  onClearButtonClick: () => void,
  disableCanvas: boolean
  onExitButtonClick: () => void,
  drawersTurnProgressBarPercentage: number,
  drawersTurn: string,
  COLORS_ARRAY: string[],
  onColorButtonClick: (color: string) => void,
  mousePosition: MousePositionInterface,
  strokeStyle: string,
  usernameRef: React.MutableRefObject<string>,
  drawing: string
}

export const useCanvasViewModel = () => {
  const navigate = useNavigate()

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const lastColorChoiceRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lineCap, setLineCap] = useState("round")
  const [strokeStyle, setStrokeStyle] = useState("black")
  const [lineWidth, setLineWidth] = useState(5)

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const [contextState, setContextState] = useState(null)

  const [disableCanvas, setDisableCanvas] = useState(false) // pass to true

  const COLORS_ARRAY = ["red", "blue", "green", "pink", "brown", "gray", "black", "violet", "orange", "yellow", "gold",
    "salmon", "purple", "aquamarine", "chocolate", "cyan", "turquoise", "aqua", "beige", "chartreuse", "crimson",
    "darkcyan", "darkolivegreen", "darkmagenta", "goldenrod", "indigo", "limegreen", "midnightblue", "mistyrose", "peru",
    "silver"]

  const { socketRef, usernameRef, roomRef,
    coordinatesRef, canvasConfigsAndCoordinatesState,
    drawersTurn,
    drawersTurnProgressBarPercentage,
    drawing } = useContext(DashboardContext)

  const initialCanvasSetup = () => {
    const canvas = canvasRef.current
    canvas.style.width = `100%`
    canvas.style.height = `100%`
    canvas.width = 1280
    canvas.height = 720
    // canvas.width = canvas.offsetWidth
    // canvas.height = canvas.offsetHeight

    const context = canvas.getContext("2d")
    context.mozImageSmoothingEnabled = false
    context.imageSmoothingEnabled = false
    setContextState(context)
  }

  const setContextConfiguration = (lineCapParam = null, strokeStyleParam = null, lineWidthParam = null) => {
    contextState.lineCap = lineCapParam ?? lineCap
    contextState.strokeStyle = strokeStyleParam ?? strokeStyle
    contextState.lineWidth = lineWidthParam ?? lineWidth

    contextRef.current = contextState

    setLineCap(contextState.lineCap)
    setStrokeStyle(contextState.strokeStyle)
    setLineWidth(contextState.lineWidth)    
  }

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event
      setMousePosition({ x: clientX, y: clientY })
    }
    document.addEventListener("mousemove", mouseMoveHandler)

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler)
    }
  }, [])

  useEffect(() => {
    initialCanvasSetup()
  }, [])

  useEffect(() => {
    if (contextState === null) return
    setContextConfiguration()
  }, [contextState])

  useEffect(() => {
    canvasConfigsAndCoordinatesState.forEach(canvasConfigsAndCoordinatesByMessage => {

      const configs = canvasConfigsAndCoordinatesByMessage.configs
      const allCoordinates = canvasConfigsAndCoordinatesByMessage.coordinates
      const username = canvasConfigsAndCoordinatesByMessage.username
      
      if (username === usernameRef.current) return

      const { lineCap, strokeStyle, lineWidth } = configs
      setContextConfiguration(lineCap, strokeStyle, lineWidth)

      if (allCoordinates.length === 1) {
        contextRef.current.beginPath()
        contextRef.current.lineTo(allCoordinates[0][0], allCoordinates[0][1])
        contextRef.current.stroke()
        contextRef.current.closePath()

        return
      }

      allCoordinates.forEach((coordinates, index) => {
        switch (index) {
          case 0:
            contextRef.current.beginPath()
            contextRef.current.moveTo(coordinates[0], coordinates[1])
            break

          case allCoordinates.length - 1:
            contextRef.current.closePath()
            break

          default:
            contextRef.current.lineTo(coordinates[0], coordinates[1])
            contextRef.current.stroke()
            break
        }
      })

    })
  }, [canvasConfigsAndCoordinatesState])

  useEffect(() => {
    setDisableCanvas(drawersTurn !== usernameRef.current)
    return () => drawersTurn !== usernameRef.current && finishDrawing()
  }, [drawersTurn])

  const getMousePosition = (e: MouseEvent) => {
    var mouseX = e.offsetX * canvasRef.current.width / canvasRef.current.clientWidth | 0;
    var mouseY = e.offsetY * canvasRef.current.height / canvasRef.current.clientHeight | 0;
    return { x: mouseX, y: mouseY };
  }

  const startDrawing = ({ nativeEvent }: { nativeEvent: MouseEvent | TouchEvent }) => {
    if (disableCanvas) return

    let offsetX, offsetY
    if (nativeEvent instanceof MouseEvent) {
      const { x, y } = getMousePosition(nativeEvent)
      offsetX = x
      offsetY = y
    } else {
      const r = canvasRef.current.getBoundingClientRect()
      offsetX = nativeEvent.touches[0].clientX - r.left
      offsetY = nativeEvent.touches[0].clientY - r.top
    }

    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)

    coordinatesRef.current.push([offsetX, offsetY])
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)

    sendCanvasCoordinatesToWebsocket()
  }

  const sendCanvasCoordinatesToWebsocket = (lineCapParam = null, strokeStyleParam = null, lineWidthParam = null) => {  
    if(!strokeStyleParam) strokeStyleParam = lastColorChoiceRef.current

    const msgToSend: JsonData = {
      username: usernameRef.current,
      room: roomRef.current,
      message: null,
      date: new Date().toLocaleString('pt-br'),
      close: false,
      canvasCoordinates: JSON.stringify(coordinatesRef.current),
      canvasConfigs: JSON.stringify({ lineCap: lineCapParam ?? lineCap, strokeStyle: strokeStyleParam ?? strokeStyle, lineWidth: lineWidthParam ?? lineWidth })
    }
    coordinatesRef.current = []
    socketRef.current.send(JSON.stringify(msgToSend))
  }

  const draw = ({ nativeEvent }: { nativeEvent: MouseEvent | TouchEvent }) => {
    if (!isDrawing || disableCanvas) return

    let offsetX, offsetY
    if (nativeEvent instanceof MouseEvent) {
      const { x, y } = getMousePosition(nativeEvent)
      offsetX = x
      offsetY = y
    } else {
      const r = canvasRef.current.getBoundingClientRect()
      offsetX = nativeEvent.touches[0].clientX - r.left
      offsetY = nativeEvent.touches[0].clientY - r.top
    }

    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()

    coordinatesRef.current.push([offsetX, offsetY])
  }

  const onClearButtonClick = () => {
    let lineCapParam = "round"
    let strokeStyleParam = "white"
    let lineWidthParam = 5000
    setContextConfiguration(lineCapParam, strokeStyleParam, lineWidthParam)

    coordinatesRef.current = []

    contextRef.current.beginPath()
    contextRef.current.lineTo(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight)
    contextRef.current.stroke()
    contextRef.current.closePath()

    coordinatesRef.current.push([canvasRef.current.offsetWidth, canvasRef.current.offsetHeight])

    sendCanvasCoordinatesToWebsocket(lineCapParam, strokeStyleParam, lineWidthParam)

    // sets up canvas to initial pattern
    setContextConfiguration()
  }

  const onExitButtonClick = () => {
    navigate(`/`, { replace: true })
  }

  const onColorButtonClick = (color: string) => {
    contextState.strokeStyle = color
    lastColorChoiceRef.current = color
    setStrokeStyle(color)
  }

  return {
    startDrawing,
    finishDrawing,
    draw,
    canvasRef,
    onClearButtonClick,
    disableCanvas,
    onExitButtonClick,
    drawersTurnProgressBarPercentage,
    drawersTurn,
    COLORS_ARRAY,
    onColorButtonClick,
    mousePosition,
    strokeStyle,
    usernameRef,
    drawing
  }
}
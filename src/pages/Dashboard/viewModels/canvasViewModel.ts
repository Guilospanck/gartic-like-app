import React, { useContext, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { JsonData } from "~/shared/JsonDataWebsocketMessage"
import { RootState } from "~/store/modules/rootReducers"
import { DashboardContext } from "../context/dashboardContext"

export interface IUseCanvasViewModel {
  startDrawing: ({ nativeEvent }: { nativeEvent: MouseEvent }) => void,
  finishDrawing: () => void,
  draw: ({ nativeEvent }: { nativeEvent: MouseEvent }) => void,
  canvasRef: React.MutableRefObject<any>
}

export const useCanvasViewModel = () => {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)

  const { socketRef, usernameRef, roomRef, coordinatesRef, coordinatesState } = useContext(DashboardContext)

  const messages = useSelector((store: RootState) => store.messageReducer.messages)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.style.width = `100%`
    canvas.style.height = `100%`
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const context = canvas.getContext("2d")
    context.lineCap = "round"
    context.strokeStyle = "blue"
    context.lineWidth = 5
    contextRef.current = context
  }, [])

  useEffect(() => {
    coordinatesState.forEach(coordinatesByMessage => {
      coordinatesByMessage.forEach((coordinates, index) => {
        switch (index) {
          case 0:
            contextRef.current.beginPath()
            contextRef.current.moveTo(coordinates[0], coordinates[1])
            break
  
          case coordinatesByMessage.length - 1:
            contextRef.current.closePath()
            break
  
          default:
            contextRef.current.lineTo(coordinates[0], coordinates[1])
            contextRef.current.stroke()
            break
        }
      })
    })
  }, [coordinatesState])

  const startDrawing = ({ nativeEvent }: { nativeEvent: MouseEvent | TouchEvent }) => {
    let offsetX, offsetY
    if (nativeEvent instanceof MouseEvent) {
      offsetX = nativeEvent.offsetX
      offsetY = nativeEvent.offsetY
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

  const sendCanvasCoordinatesToWebsocket = () => {
    const msgToSend: JsonData = {
      username: usernameRef.current,
      room: roomRef.current,
      message: null,
      date: new Date().toLocaleString('pt-br'),
      close: false,
      canvasCoordinates: JSON.stringify(coordinatesRef.current)
    }
    coordinatesRef.current = []
    socketRef.current.send(JSON.stringify(msgToSend))
  }

  const draw = ({ nativeEvent }: { nativeEvent: MouseEvent | TouchEvent }) => {
    if (!isDrawing) return

    let offsetX, offsetY
    if (nativeEvent instanceof MouseEvent) {
      offsetX = nativeEvent.offsetX
      offsetY = nativeEvent.offsetY
    } else {
      const r = canvasRef.current.getBoundingClientRect()
      offsetX = nativeEvent.touches[0].clientX - r.left
      offsetY = nativeEvent.touches[0].clientY - r.top
    }

    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()

    coordinatesRef.current.push([offsetX, offsetY])
  }

  return {
    startDrawing,
    finishDrawing,
    draw,
    canvasRef
  }
}
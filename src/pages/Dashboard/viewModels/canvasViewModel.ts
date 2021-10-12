import React, { useEffect, useRef, useState } from "react"

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

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const context = canvas.getContext("2d")
    context.scale(2, 2)
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context
  }, [])

  const startDrawing = ({ nativeEvent }: { nativeEvent: MouseEvent }) => {
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }: { nativeEvent: MouseEvent }) => {
    if (!isDrawing) return

    const { offsetX, offsetY } = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  return {
    startDrawing,
    finishDrawing,
    draw,
    canvasRef
  }
}
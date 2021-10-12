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
    canvas.style.width = `100%`
    canvas.style.height = `100%`
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const context = canvas.getContext("2d")
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context
  }, [])

  const startDrawing = ({ nativeEvent }: { nativeEvent: MouseEvent | TouchEvent }) => {
    let offsetX, offsetY
    if(nativeEvent instanceof MouseEvent){
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
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }: { nativeEvent: MouseEvent | TouchEvent }) => {
    if (!isDrawing) return

    let offsetX, offsetY
    if(nativeEvent instanceof MouseEvent){
       offsetX = nativeEvent.offsetX
       offsetY = nativeEvent.offsetY
    } else {
      const r = canvasRef.current.getBoundingClientRect()
      offsetX = nativeEvent.touches[0].clientX - r.left
      offsetY = nativeEvent.touches[0].clientY - r.top
    }

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
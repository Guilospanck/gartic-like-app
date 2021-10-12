import React from "react"

export const DashboardView = ({ CanvasComponent }) => {
  return (
    <div style={{ border: '1px solid red', width: '500px' }}>
     
      <CanvasComponent />
    </div>
  )
}
import React from "react"
import { Container } from "./styles"

export const DashboardView = ({ CanvasComponent, ChatComponent }) => {  

  return (
    <Container>
      <CanvasComponent item />
      <ChatComponent item />
    </Container>
  )
}
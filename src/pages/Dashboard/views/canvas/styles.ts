import styled from "styled-components"

export const Container = styled.div`
  box-shadow: -1px 2px 12px 0px #c7c6c5;
  
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-grow: 7;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
`

export const ClearButton = styled.button`
  border: none;
  outline: none;
  background: blue;
  border-radius: 5px;
  padding: 5px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
`

export const PlayerTurnName = styled.button`
  border: none;
  outline: none;
  background: green;
  border-radius: 5px;
  padding: 5px;  
  color: white;  
`

export const ExitButton = styled.button`
  border: none;
  outline: none;
  background: red;
  border-radius: 5px;
  padding: 5px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
`

export const CanvasContainer = styled.div`
  height: 100%;
`

export const CanvasStyled = styled.canvas`    
  height: 100%;
`
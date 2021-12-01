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

export const CanvasAndColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35px;
  height: 100%;

  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 0.5%;

  margin-left: 1px;
  padding: 5px;
  box-shadow: -1px 2px 12px 0px #c7c6c5;
`

interface ColorIconButtonInterface {
  bgColor?: string
}

export const ColorIconButton = styled.button<ColorIconButtonInterface>`
  border: none;
  outline: none;
  background: ${props => props.bgColor || 'red'};
  border-radius: 3px;

  padding: 0px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`

export const Divider = styled.div`
  width: 20px;
  height: 1px;
  margin-top: 2px;
  border-top: 1px solid gray;
`

interface MouseSquareFollowerInterface {
  bgColor?: string
  top: string
  left: string
}
export const MouseSquareFollower = styled.div<MouseSquareFollowerInterface>`
  position: fixed;
  top: ${props => props.top || '50%'};
  left: ${props => props.left || '50%'};
  width: 8px;
  height: 8px;
  background-color: ${props => props.bgColor};
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
`

export const CanvasContainer = styled.div`
  height: 100%;
`

export const CanvasStyled = styled.canvas`    
  height: 100%;
`
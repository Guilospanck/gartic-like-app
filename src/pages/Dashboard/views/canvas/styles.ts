import styled from "styled-components"

export const Container = styled.div`
  box-shadow: -1px 2px 12px 0px #c7c6c5;
  
  display: flex;
  width: 100%;
  height: 100%;
  flex-grow: 7;

  position: relative;

  @media(min-width: 800px) {
  }
`

export const ClearButton = styled.button`
  border: none;
  outline: none;
  background: blue;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  top: 10px;
  text-transform: uppercase;
  color: white;
  right: 10px;
  cursor: pointer;
`

export const ExitButton = styled.button`
  border: none;
  outline: none;
  background: red;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  top: 10px;
  text-transform: uppercase;
  color: white;
  left: 10px;
  cursor: pointer;
`

export const CanvasStyled = styled.canvas`  
  

`
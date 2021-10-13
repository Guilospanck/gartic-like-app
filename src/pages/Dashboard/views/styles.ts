import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;  
  grid-gap: 1%;
  height: 100%;

  @media(min-width: 600px) {
    grid-template-columns: [canvas] 74% [chat] 25%;
  }
`

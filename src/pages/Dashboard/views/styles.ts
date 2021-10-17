import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1%;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  justify-items: center;    

  @media(min-width: 800px) {
    flex-direction: row;
  }
`

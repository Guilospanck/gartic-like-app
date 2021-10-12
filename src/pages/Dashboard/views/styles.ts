import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: [canvas] 74% [chat] 25%;
  column-gap: 1%;
  height: 100%;

  // @media screen and (max-width: 768px) {
  //   grid-template-rows: [canvas] 74% [chat] 25%;
  // }
`

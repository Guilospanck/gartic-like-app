import styled from "styled-components"

export const BarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
`
interface ProgressPercentage {
  percentage: number
}

export const Progress = styled.div<ProgressPercentage>`
  background: red;
  height: 100%;
  width: ${props => props.percentage + '%' ?? '100%'};
  // width: 100%;
`
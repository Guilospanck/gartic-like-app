import styled from "styled-components"

export const BarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
`
interface ProgressPercentage {
  percentage: number
  color: string
}

export const Progress = styled.div<ProgressPercentage>`
  background: ${props => props.color};
  height: 100%;
  width: ${props => props.percentage + '%' ?? '100%'};
  transition: width 0.7s ease-in-out;
  border-radius: ${props => props.percentage === 100 ? '0px' : '0px 9px 9px 0px'};
`
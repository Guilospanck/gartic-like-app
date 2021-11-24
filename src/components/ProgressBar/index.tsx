import React from 'react'
import {
  BarContainer,
  Progress
} from './styles'

type IProgressBar = {
  percentage: number
}

export const ProgressBar = ({ percentage }: IProgressBar) => {

  return (
    <BarContainer>
      <Progress percentage={percentage} />
    </BarContainer>
  )

}
import React from 'react'
import {
  BarContainer,
  Progress
} from './styles'

type IProgressBar = {
  percentage: number
}

export const ProgressBar = ({ percentage }: IProgressBar) => {

  const _getProgressBarColor = () => {
    switch (true) {
      case percentage >= 80:
        return '#359d73'
      case percentage >= 60:
        return '#f0be39'
      case percentage >= 40:
        return '#ffc163'
      case percentage >= 20:
        return '#ffa879'
      default:
        return '#fb4b4b'
    }
  }

  const color = _getProgressBarColor()

  return (
    <BarContainer>
      <Progress percentage={percentage} color={color} />
    </BarContainer>
  )

}
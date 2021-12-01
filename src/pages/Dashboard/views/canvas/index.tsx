import React, { useMemo } from 'react'
import { IUseCanvasViewModel } from '../../viewModels/canvasViewModel'
import {
  CanvasContainer, CanvasStyled, Container, ClearButton,
  ExitButton, PlayerTurnName, ButtonsContainer,
  ColorsContainer, CanvasAndColorsContainer, ColorIconButton,
  Divider, MouseSquareFollower,
} from './styles'
import { ProgressBar } from '../../../../components/ProgressBar'

import EraserSVG from '../../../../assets/svg/eraser.svg'

type CanvasViewModelProps = {
  viewModel: IUseCanvasViewModel
}

export const CanvasView = ({ viewModel }: CanvasViewModelProps) => {

  const ColorButtons = useMemo(() => (
    <ColorsContainer>
      {
        viewModel.COLORS_ARRAY.map((color, index) => (
          <ColorIconButton onClick={() => viewModel.onColorButtonClick(color)} key={index} bgColor={color} />
        ))
      }
      <Divider />
      <ColorIconButton onClick={() => viewModel.onColorButtonClick("white")} bgColor={"none"} >
        <EraserSVG width={20} height={20} />
      </ColorIconButton>
    </ColorsContainer>
  ), [viewModel.COLORS_ARRAY])

  return (
    <>
      <MouseSquareFollower
        left={`${viewModel.mousePosition.x}px`}
        top={`${viewModel.mousePosition.y}px`}
        bgColor={viewModel.strokeStyle}
      />
      <Container>
        <ProgressBar percentage={viewModel.drawersTurnProgressBarPercentage} />
        <ButtonsContainer>
          <ExitButton onClick={viewModel.onExitButtonClick}>Exit</ExitButton>
          {
            viewModel.drawersTurn ?
              <PlayerTurnName>Player's Turn: <b>{viewModel.drawersTurn}</b></PlayerTurnName> :
              <span>Waiting for participants...</span>
          }
          {
            !viewModel.disableCanvas &&
            <ClearButton onClick={viewModel.onClearButtonClick}>Clear</ClearButton>
          }
        </ButtonsContainer>


        <CanvasAndColorsContainer>
          <CanvasContainer id="canvas-container">
            <CanvasStyled
              onMouseDown={viewModel.startDrawing}
              onMouseUp={viewModel.finishDrawing}
              onMouseMove={viewModel.draw}
              ref={viewModel.canvasRef}
            />
          </CanvasContainer>

          {!viewModel.disableCanvas && ColorButtons}

        </CanvasAndColorsContainer>
      </Container>
    </>
  )
}
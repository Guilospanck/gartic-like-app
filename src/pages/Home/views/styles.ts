import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
`

export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  margin: 0 auto;
`

export const InsertNameInput = styled.input`
  background: none;
  border: 1px solid grey;
  outline: none;

  width: 100%;
  height: 34px;
  border-radius: 5px;
  padding: 10px;

  margin-bottom: 5%;
`

export const EnterButton = styled.button`
  background: #884eef;
  color: white;
  border: none;
  outline: none;

  padding: 7px;
  cursor: pointer;

  width: 100%;
  border-radius: 5px;
`
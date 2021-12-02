import { useState } from "react"
import { useNavigate } from "react-router-dom"

export interface IUseHomeViewModel {
  username: string,
  setUsername: (username: string) => void,
  onEnterClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handleTextAreaKeyDown: (e: React.KeyboardEvent) => void,
}

export const useHomeViewModel = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')

  const onEnterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    _verifyIfNameIsFilledAndGoToWaitingRoom()
  }

  const handleTextAreaKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.stopPropagation()
      _verifyIfNameIsFilledAndGoToWaitingRoom()
    }
  }

  const _verifyIfNameIsFilledAndGoToWaitingRoom = () => {
    if (username.length === 0) return

    navigate(`/waitingroom?username=${username}`, { replace: true })
  }

  return {
    username,
    setUsername,
    onEnterClick,
    handleTextAreaKeyDown
  }

}
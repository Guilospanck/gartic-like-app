import { useState } from "react"
import { useHistory } from "react-router"

export interface IUseHomeViewModel {
  username: string,
  setUsername: (username: string) => void,
  onEnterClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handleTextAreaKeyDown: (e: React.KeyboardEvent) => void,
}

export const useHomeViewModel = () => {

  const history = useHistory()

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

    history.push({
      pathname: "/waitingroom",
      search: `?username=${username}`
    })
  }

  return {
    username,
    setUsername,
    onEnterClick,
    handleTextAreaKeyDown
  }

}
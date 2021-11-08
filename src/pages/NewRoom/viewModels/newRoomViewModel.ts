import { useState } from "react"
import { useHistory } from "react-router"
import { useLocation } from "react-router-dom"

export interface IUseNewRoomViewModel {
  roomName: string,
  setRoomName: (roomName: string) => void,
  onEnterClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handleTextAreaKeyDown: (e: React.KeyboardEvent) => void,  
}

export const useNewRoomViewModel = () => {

  const history = useHistory()

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()

  const [username, setUsername] = useState(query.get("username"))
  const [roomName, setRoomName] = useState("")

  const onEnterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    _verifyIfNameIsFilledAndGoToDashboard()
  }

  const handleTextAreaKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.stopPropagation()
      _verifyIfNameIsFilledAndGoToDashboard()
    }
  }

  const _verifyIfNameIsFilledAndGoToDashboard = () => {
    if (roomName.length === 0) return

    history.push({
      pathname: "/dashboard",
      search: `?username=${username}&room=${roomName}`
    })
  }


  return {
    roomName,
    setRoomName,
    onEnterClick,
    handleTextAreaKeyDown
  }
}
import { useState } from "react"
import { useNavigate } from "react-router"
import { useLocation } from "react-router-dom"

export interface IUseNewRoomViewModel {
  roomName: string,
  setRoomName: (roomName: string) => void,
  onEnterClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handleTextAreaKeyDown: (e: React.KeyboardEvent) => void,  
}

export const useNewRoomViewModel = () => {

  const navigate = useNavigate()

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

    navigate(`/dashboard?username=${username}&room=${roomName}`, { replace: true })

  }


  return {
    roomName,
    setRoomName,
    onEnterClick,
    handleTextAreaKeyDown
  }
}
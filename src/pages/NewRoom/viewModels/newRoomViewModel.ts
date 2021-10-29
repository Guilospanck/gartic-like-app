import { useState } from "react"
import { useHistory } from "react-router"
import { useLocation } from "react-router-dom"

export interface IUseNewRoomViewModel {
  roomName: string,
  setRoomName: (roomName: string) => void,
  onEnterClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
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
    if (roomName.length === 0) return

    e.stopPropagation()
    history.push({
      pathname: "/dashboard",
      search: `?username=${username}&room=${roomName}`
    })
  }

  return {
    roomName,
    setRoomName,
    onEnterClick
  }
}
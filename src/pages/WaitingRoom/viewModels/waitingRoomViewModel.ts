import { useState } from "react"
import { useHistory, useLocation } from "react-router-dom"

export interface IUseWaitingRoomViewModel {
  participants: number[],
  onEnterClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const useWaitingRoomViewModel = () => {

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()

  const [participants, setParticipants] = useState([1, 2])
  const [username, setUsername] = useState(query.get('username'))

  const history = useHistory()

  const onEnterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    history.push({
      pathname: "/dashboard",
      search: `?username=${username}`
    })
  }

  return {
    participants,
    onEnterClick
  }
}
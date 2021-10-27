import { useState } from "react"
import { useHistory } from "react-router"

export interface IUseHomeViewModel {
  username: string,
  setUsername: (username: string) => void,
  onEnterClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const useHomeViewModel = () => {

  const history = useHistory()

  const [username, setUsername] = useState('')  

  const onEnterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(username.length === 0) return

    e.stopPropagation()
    history.push({
      pathname: "/waitingroom",
      search: `?username=${username}`
    })
  }

  return {
    username,
    setUsername,
    onEnterClick
  }

}
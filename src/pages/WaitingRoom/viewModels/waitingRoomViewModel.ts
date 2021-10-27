import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"

export interface IUseWaitingRoomViewModel {
  rooms: DataToRender[],
  onEnterClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

type WaitingRoomData = {
  room: string,
  participants: string[],
}

type DataToRender = {
  room: string,
  numOfParticipants: number
}

export const useWaitingRoomViewModel = () => {

  const history = useHistory()

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()

  const [rooms, setRooms] = useState([])
  const [username, setUsername] = useState(query.get('username'))

  const room = "waitingroomgarticlikeapp"

  const _fillParticipantsAndRoomsArrayWithMsgReceived = (msg: WaitingRoomData[]) => {
    const dataToRenderArray: DataToRender[] = []

    msg.forEach(item => {
      dataToRenderArray.push({
        room: item.room,
        numOfParticipants: item.participants.length
      })
    })

    setRooms(dataToRenderArray)
  }

  useEffect(() => {
    const url = `${process.env.WEBSOCKET_URL}?username=${username}&room=${room}`
    const socket = new WebSocket(url)

    socket.onopen = (event) => {
      console.log("Opened waiting room socket: \n")
      console.log(event)
    }

    socket.onerror = (event) => {
      console.log("Error waiting room socket: \n")
      console.log(event)
    }

    socket.onmessage = (event) => {      
      if (event?.data) {
        const msg: WaitingRoomData[] = JSON.parse(event.data)        
        _fillParticipantsAndRoomsArrayWithMsgReceived(msg)
      }
    }

  }, [])


  const onEnterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    history.push({
      pathname: "/dashboard",
      search: `?username=${username}`
    })
  }

  return {
    rooms,
    onEnterClick
  }
}
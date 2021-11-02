import { useCallback, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"

import { JsonData } from "~/shared/JsonDataWebsocketMessage"

export interface IUseWaitingRoomViewModel {
  rooms: DataToRender[],
  onEnterClick: (e: React.MouseEvent<HTMLButtonElement>, room: string) => void,
  onNewRoomClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

type WaitingRoomData = {
  room: string,
  participants: string[],
}

type DataToRender = {
  room: string,
  numOfParticipants: number
}

let socket = null

export const useWaitingRoomViewModel = () => {

  const history = useHistory()

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()

  const [rooms, setRooms] = useState([])
  const [username, setUsername] = useState(query.get('username'))

  const room = "waitingroomgarticlikeapp"
  const url = `${process.env.WEBSOCKET_URL}?username=${username}&room=${room}`

  const memoizedSocket = useCallback(() => {
    if (!socket) return

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

  useEffect(() => {
    socket = new WebSocket(url)
    memoizedSocket()

    return function cleanup() {
      const msgToSend: JsonData = {
        username: username,
        room: room,
        message: 'closing waiting room...',
        date: new Date().toLocaleString('pt-br'),
        close: true
      }
      socket.send(JSON.stringify(msgToSend))
    }
  }, [])


  const onEnterClick = (e: React.MouseEvent<HTMLButtonElement>, room: string) => {
    e.stopPropagation()
    history.push({
      pathname: "/dashboard",
      search: `?username=${username}&room=${room}`
    })
  }

  const onNewRoomClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    history.push({
      pathname: "/newroom",
      search: `?username=${username}`
    })
  }

  const _fillParticipantsAndRoomsArrayWithMsgReceived = (msg: WaitingRoomData[]) => {
    const dataToRenderArray: DataToRender[] = []
    msg.forEach(item => {
      if (item.room === room) return

      dataToRenderArray.push({
        room: item.room,
        numOfParticipants: item.participants.length
      })
    })

    setRooms(dataToRenderArray)
  }

  return {
    rooms,
    onEnterClick,
    onNewRoomClick
  }
}
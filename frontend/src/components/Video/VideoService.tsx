import axios from "axios"
import { Video } from "./VideoInterface"

const api = "http://localhost:4000"


 export  const getvideos = async () => {
    return await axios.get<Array<Video>>(`${api}/videos`)
  }

  export  const createVideo = async (video: Video) => {
    return await axios.post(`${api}/videos`, video)
  }

  
 export  const getvideoId = async (id : string) => {
  return await axios.get<Video>(`${api}/videos/${id}`)
}

export  const updateVideo = async (id : string, video: Video) => {
  return await axios.put<Video>(`${api}/videos/${id}`, video)
}

export  const deleteVideo = async (id : string) => {
  return await axios.delete<Video>(`${api}/videos/${id}`)
}
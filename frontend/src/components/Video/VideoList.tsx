import  React, { useState, useEffect } from 'react'
import * as VideoService from "./VideoService"
import VideoItem from './VideoItem'
import { Video } from './VideoInterface'

const VideoList = () => {

  const [videos, setvideos] = useState <Array<Video>>([])

  useEffect(() => {
      loadVideo()
  }, [])

  const  loadVideo  = async () => {
    const res = await VideoService.getvideos();
    
    const formatedVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    
    setvideos(formatedVideos);
  }
  
  return (
    
   videos.map((video) => {
      return ( 
      <VideoItem 
      video={video} 
      key={video._id} 
      loadvideo={ loadVideo}/>
      )
      })
  )
 
}

export default VideoList
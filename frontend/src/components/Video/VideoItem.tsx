import React from 'react'
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { Video } from './VideoInterface'
import "./videoItem.css"
import * as videoService from "./VideoService"

interface Props {
  video : Video
  loadvideo : () => void;
}

const VideoItem = ( props : Props) => {

   const {video, loadvideo} = props
 
   const navigate = useNavigate();
  
   const handleDelete = async (id: string) => {
  await videoService.deleteVideo(id);
  loadvideo();
}
  
  
  return (
    <div className="col-md-4 p-2">
    <div
      className="card card-body video-card animate__animated animate__backInUp"
      style={{ cursor: "pointer" }}>
      
      <div className="d-flex justify-content-between ">
        <h5>{video.title}</h5>
        <button 
        type="button" 
        className="btn btn-info"
        onClick={() => navigate(`/update/${video._id}`)}>
           Update
        </button>
        <button
         type="button" className="btn btn-danger" 
         onClick={() => video._id && handleDelete(video._id)  }>
           Delete    
         </button> 
      </div>

      <p>{video.description}</p>
      
      <div className="embed-responsive embed-responsive-16by9">
        <ReactPlayer 
        url={video.url}
        width="100%"
        height="100%"
        />
      </div>
    </div>
  </div>
);
};

export default VideoItem 


import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Video } from './VideoInterface'
import * as videoService from "./VideoService"

interface Params {
  id?: string 
}

const VideoForm = () => {

  const navigate = useNavigate();
  const params = useParams<Params>();

  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  
  const [video, setvideo] = useState<Video>(initialState)

  const GettingVideo = async (id :string) =>{
    const res = await videoService.getvideoId(id);
    const {title, description, url} = res.data;
    setvideo({title, description, url});

  }


  useEffect(() => {
  if (params.id) GettingVideo(params.id)
  }, [params.id])
  

   type InputChangeType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const handleInputChange = (e: InputChangeType) =>{ 
    setvideo({ ...video, [e.target.name]: e.target.value }); } //hacer una copia del estado actual(...video) y le digo que del e.target.name que afecte su valor 
  
  const handlesubmit = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    
    if(!params.id){
      await videoService.createVideo(video);
      toast.success("New video added")
    }else{
      await videoService.updateVideo(params.id, video)
    }

    navigate('/')
  }


    return (
 
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
            <h3>New Video</h3>
            <form onSubmit={handlesubmit} >
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a Title for this video"
                  className="form-control"
                  autoFocus
                  onChange={handleInputChange}
                  value={video.title}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleInputChange}
                  value={video.description}
                 
                ></textarea>
              </div>

              {params.id ? (
                <button className="btn btn-info">Update</button>
              ) : (
                <button className="btn btn-primary">Create</button>
              )}
                
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoForm
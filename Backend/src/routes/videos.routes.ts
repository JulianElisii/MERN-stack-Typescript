import {Router} from 'express';
import * as videoCrtl from './videos.controler';

const router = Router();



router.get("/videos", videoCrtl.getVideos);

router.get("/videos/:id", videoCrtl.getVideo);

router.post("/videos", videoCrtl.createVideo);

router.delete("/videos/:id", videoCrtl.deleteVideo);

router.put("/videos/:id", videoCrtl.updateVideo);


export default router
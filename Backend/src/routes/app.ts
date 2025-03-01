import express from "express";
import morgan from "morgan";
import cors from "cors";

import videosRoutes from "./videos.routes";

const app = express();

app.set("PORT", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(videosRoutes);

export default app;
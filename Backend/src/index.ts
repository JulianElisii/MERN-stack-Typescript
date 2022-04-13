import app from "./routes/app"
import "./routes/database"
import PORT from "./routes/config"


app.listen(PORT,()=> {
  console.log(`Server on port ${PORT}`)
})
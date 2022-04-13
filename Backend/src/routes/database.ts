import mongoose from 'mongoose';


(async () => {
   try{
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/tsmern-database")
    console.log("database in conected to:", db.connection.name)
   }
   catch(error){
console.log(error)
   }
})()

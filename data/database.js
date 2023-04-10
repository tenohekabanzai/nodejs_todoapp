import mongoose from "mongoose";
export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName: "backendapi",})
    .then(console.log(`MongoDB connected with ${c.connection.host}`))
    .catch((err)=>console.log(err));
}
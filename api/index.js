import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
dotenv.config();
//password and name for database:mern-auth
// mongoose.connect(process.env.MONGO).then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.log(err);
//   });
mongoose.connect(process.env.MONGO).then(()=>{
  console.log('connected to MongoDb');
}).catch((err) =>{
  console.log(err);
});

const app = express();

app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
});

app.use("/api/user",userRoutes);
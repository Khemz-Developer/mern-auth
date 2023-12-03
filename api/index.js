import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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

app.listen(4000, ()=>{
    console.log('Server listening on port 4000');
});
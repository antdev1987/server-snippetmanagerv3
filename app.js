import express from "express";
import "dotenv/config";
const app = express();
import conectDb from "./db/connect.js";
app.use(express.json())

//routes being imported 
import foldersRoutes from './routes/foldersRoutes.js'
import userRoutes from './routes/userRoutes.js'

//middlesware being set up
app.use('/api/user',userRoutes)
app.use('/api/folder',foldersRoutes)

//server being running
const port = 4000;
const start = async () => {
  try {
    await conectDb();
    app.listen(port, console.log(`server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
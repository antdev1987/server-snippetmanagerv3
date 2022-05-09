import mongoose from "mongoose";

const conectDb = () => mongoose.connect(process.env.DB_URI);

export default conectDb;

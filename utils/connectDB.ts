// mongoose
import mongoose from "mongoose";
// vars
import { MONGO_URI } from "./vars";

export default async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  mongoose.set("strictQuery", false);
  await mongoose.connect(MONGO_URI);
  console.log("Connected to DB");
}

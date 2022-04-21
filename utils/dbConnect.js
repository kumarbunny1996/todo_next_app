import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;
if (!DB_URL) {
  throw new Error(
    "Please define the DB_URL environment variable inside .env.local"
  );
}
const dbConnect = async () => {
  mongoose.connect(
    DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("Connected to DB")
  );
};

export default dbConnect;

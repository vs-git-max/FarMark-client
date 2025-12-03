import mongoose from "mongoose";

async function connectToDB() {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    console.log("Mongo URI not found");
    return;
  } else {
    await mongoose
      .connect(MONGO_URI)
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  }
}

export default connectToDB;

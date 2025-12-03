import express from "express";

import dotenv from "dotenv";
dotenv.config();

import connectToDB from "./database/db.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server is running on port ${PORT}`);
});

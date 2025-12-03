// importing the dependencies
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

// importing the functions
import connectToDB from "./database/db.js";

const PORT = process.env.PORT || 5000;

const app = express();

// using the app
const allowedOrigins = ["http://localhost:3000"];
app.use(cookieParser());

const isAllowed = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by the CORS"));
    }
  },
  methods: ["POST", "PUT", "DELETE", "GET"],
};

app.use(cors(isAllowed));

// listening to the app
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server is running on port ${PORT}`);
});

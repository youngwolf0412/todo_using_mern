//user
//SzEkSVbL41Lk9xd8

import mongoose from "mongoose";
// import { dotenv } from "dotenv";

//mongoose helps to make connection with database
//with express you cannot connect with mongoDB

// dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

mongoose.set("strictQuery", true);

const Connection = () => {
  const MONGODB_URI = `mongodb+srv://user:SzEkSVbL41Lk9xd8@mern-todo.3hdxxsu.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI);

  mongoose.connection.on("connected", () => {
    console.log("DB connected succesfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("DB disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting the db", error.message);
  });
};

export default Connection;

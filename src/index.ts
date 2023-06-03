import express from "express";
import { dbConnect } from "./DB/connection";
import { v1 } from "./routes";

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use("/v1", v1);

  try {
    await dbConnect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return;
  }

  app.listen(5000, () => console.log("Server running on port 5000"));
};

main();

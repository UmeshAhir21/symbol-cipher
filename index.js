import express from "express";
import cors from "cors";
import router from "./router.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 7000");
});

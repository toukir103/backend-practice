import express from "express";
import userRoutes from "./modules/user/user.route";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running successfully ✅");
});

app.use("/api", userRoutes);

export default app;

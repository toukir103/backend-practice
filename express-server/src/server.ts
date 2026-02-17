import app from "./app";
import { initDB } from "./utils/initDB";

const PORT = 5000;

const startServer = async () => {
  await initDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();

import { Request, Response } from "express";
import app from "./app";
import { Pool } from "pg";

const port = 5000;

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_aeZH84bWVFBQ@ep-bitter-bread-ail9yln1-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

const initDB = async (): Promise<void> => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        age INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("✅ Users table created or already exists");
  } catch (error) {
    console.error("❌ Error creating users table:", error);
  }
};

// root route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "This is root route Toukir",
    path: req.path,
  });
});

// create user route
app.post("/user", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log(body);

    res.status(200).json({
      success: true,
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

// start server after DB init
const startServer = async () => {
  await initDB();

  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
};

startServer();

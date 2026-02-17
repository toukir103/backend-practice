import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const connectDB = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("✅ PostgreSQL Connected Successfully");
  } catch (error) {
    console.error("❌ Database connection failed", error);
    process.exit(1);
  }
};

export const initDB = async () => {
  try {
    console.log("🔄 Initializing Database...");

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Database Initialized Successfully");
  } catch (error) {
    console.error("❌ Database Initialization Failed", error);
    process.exit(1);
  }
};

import { pool } from "../config/db";

export const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE,
        age INT
      )
    `);
    console.log("✅ Users table is ready!");
  } catch (error) {
    console.error("❌ DB init error:", error);
  }
};

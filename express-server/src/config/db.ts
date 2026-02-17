import { Pool } from "pg";

export const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_tL8GN6xbHAjh@ep-wispy-base-ahps3us6-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

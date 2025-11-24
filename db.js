import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.connect((err) => {
  if (err) {
    console.error('DATABASE CONNECTION FAILED!', err);
  } else {
    console.log('PostgreSQL Connected Successfully!');
  }
});

export default pool;
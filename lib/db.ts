import { Pool } from 'pg';

// Railway automatically provides DATABASE_URL environment variable
// Validate DATABASE_URL format
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('DATABASE_URL is not set in environment variables');
} else if (!databaseUrl.startsWith('postgresql://') && !databaseUrl.startsWith('postgres://')) {
  console.error('DATABASE_URL format is invalid. Should start with postgresql:// or postgres://');
  console.error('Current DATABASE_URL (first 50 chars):', databaseUrl.substring(0, 50));
} else {
  console.log('DATABASE_URL is set (length:', databaseUrl.length, 'chars)');
}

const pool = new Pool({
  connectionString: databaseUrl,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Initialize database table
export async function initDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        goal TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Database table initialized');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Save a lead to the database
export async function saveLead(email: string, goal: string) {
  try {
    const result = await pool.query(
      'INSERT INTO leads (email, goal) VALUES ($1, $2) RETURNING *',
      [email, goal]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error saving lead:', error);
    throw error;
  }
}

// Get all leads (for admin view)
export async function getAllLeads() {
  try {
    const result = await pool.query(
      'SELECT * FROM leads ORDER BY created_at DESC'
    );
    return result.rows;
  } catch (error) {
    console.error('Error fetching leads:', error);
    throw error;
  }
}

export default pool;


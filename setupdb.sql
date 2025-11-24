-- Create database (run once)
CREATE DATABASE studentconnect;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT NOW()
);

-- Default Admin Account
INSERT INTO users (name, email, password, role) 
VALUES ('Admin', 'admin@college.edu', '$2a$10$Y0dG8z5j5nX9q9z5j5nX9u5j5nX9q9z5j5nX9q9z5j5nX9q9z5j5', 'admin');

-- Purana admin delete kar do
DELETE FROM users WHERE email = 'admin@college.edu';

-- Naya admin insert karo with "admin123"
INSERT INTO users (name, email, password, role) 
VALUES (
  'Admin',
  'admin@college.edu',
  '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',  -- ye hash = "admin123"
  'admin'
);
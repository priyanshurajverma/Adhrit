# Adhrit Technologies Database Setup

This folder contains database initialization scripts for the Adhrit Technologies backend.

## Files

- `schema.sql` - Main database schema with all tables
- `seed.sql` - Optional: Additional sample data

## Setup Instructions

### Prerequisites
- MySQL Server 5.7 or higher
- MySQL Client or GUI tool (phpMyAdmin, MySQL Workbench, etc.)

### Step 1: Create Database
```bash
mysql -u root -p < schema.sql
```

### Step 2: Update Backend Configuration
Edit `backend/.env` and set your database credentials:
```
DATABASE_URL=mysql+pymysql://username:password@localhost:3306/adhrit_db
```

### Step 3: Verify Connection
Run the backend health check:
```bash
curl http://localhost:8000/api/health
```

## Database Structure

### Tables

#### contacts
- Contact form submissions from website
- Tracks: name, email, phone, company, message
- Status: new, replied, closed

#### services
- Services offered by Adhrit
- Includes: name, description, icon, category

#### solutions
- Solution expertise areas
- Includes: name, description, metrics, icon

#### technologies
- Technology partners and brands
- Includes: name, category, logo_url

#### inquiries
- Lead generation / project inquiries
- Tracks: company info, service interest, budget, timeline, status

## Admin Access
Database tables can be queried directly via the Python backend API.
Access `/docs` endpoint for interactive API documentation.

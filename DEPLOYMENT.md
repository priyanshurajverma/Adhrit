# Deployment Guide for Adhrit Technologies

This guide will help you deploy the **Adhrit Technologies** project using **Vercel** for the frontend and **Railway** for the backend and database.

## Phase 1: Backend & Database (Railway)

1.  **Create a Railway Project**:
    - Go to [Railway.app](https://railway.app/) and create a new project.
2.  **Add MySQL**:
    - Click **"Add Service"** -> **"Database"** -> **"MySQL"**.
    - Once created, click on the MySQL service, go to the **"Variables"** tab, and copy the `MYSQL_URL` or `DATABASE_URL`.
3.  **Deploy Flask API**:
    - Connect your GitHub repository.
    - Select the `backend` folder as the root directory (or use the monorepo setting).
    - Railway will automatically detect the `Procfile` and `requirements.txt`.
4.  **Set Environment Variables on Railway**:
    - `DATABASE_URL`: Your MySQL connection string.
    - `FLASK_ENV`: `production`

## Phase 2: Frontend (Vercel)

1.  **Import to Vercel**:
    - Go to [Vercel](https://vercel.com/) and import your repository.
2.  **Configure Project**:
    - **Cloud Directory**: Select the `frontend` folder.
    - **Framework Preset**: Next.js.
3.  **Set Environment Variables on Vercel**:
    - `NEXT_PUBLIC_API_URL`: The URL of your Railway backend (e.g., `https://your-backend.up.railway.app/api`).
4.  **Domain Setup**:
    - Go to **Settings** -> **Domains**.
    - Add `adhrittechnologies.in`.
    - Follow the DNS instructions to point your domain to Vercel.

## Phase 3: Final Verification

1.  **CORS**: Ensure your Railway backend settings allow requests from `adhrittechnologies.in` (already configured in `main.py` and `config.py`).
2.  **Database Migration**:
    - Use the provided `database/schema.sql` to initialize your MySQL database on Railway if it doesn't happen automatically. You can use the Railway CLI or a database client like TablePlus/DBeaver.

---

**Need Help?** If you encounter any errors during deployment, share the log snippet here and I'll help you debug!

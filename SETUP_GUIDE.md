# Adhrit Technologies - Full Stack Setup Guide

## 📋 Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.9+
- **MySQL** 8.0+
- **Git**
- **Vercel CLI** (for deployment)

---

## 🚀 Local Development Setup

### 1. Clone and Navigate
```bash
cd Adhrit
```

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
cat > .env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:8000/api
EOF

# Start development server
npm run dev
```

Frontend will be available at `http://localhost:3000`

### 3. Backend Setup

```bash
cd ../backend

# Create Python virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cat > .env << EOF
DATABASE_URL=mysql+pymysql://root:password@localhost:3306/adhrit_db
CORS_ORIGINS=http://localhost:3000,http://localhost:8000,https://adhrittechnologies.in
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EOF

# Start backend server
python main.py
```

Backend API will be available at `http://localhost:8000`
- Interactive API docs: `http://localhost:8000/docs`

### 4. Database Setup

```bash
# Login to MySQL
mysql -u root -p

# Run schema
source database/schema.sql

# Verify
USE adhrit_db;
SHOW TABLES;
```

---

## 🐳 Docker Setup (Optional)

### Quick Start with Docker Compose

```bash
# From project root
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

Services:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`
- MySQL: `localhost:3306`

### Cleanup
```bash
docker-compose down
docker volume rm adhrit_mysql_data  # Remove database volume
```

---

## 🌐 Vercel Deployment

### Frontend Deployment

#### Step 1: Connect to Vercel
```bash
npm i -g vercel

cd frontend

vercel login  # Sign in with GitHub
vercel        # Deploy to Vercel
```

#### Step 2: Set Environment Variables

In Vercel Dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://your-backend-url.com/api`

#### Step 3: Deploy
```bash
vercel --prod
```

### Backend Deployment

**Option A: Railway.app (Recommended for Python)**

1. Sign up at [railway.app](https://railway.app)
2. Connect GitHub repo
3. Add MySQL service (or use existing)
4. Deploy with:
   ```bash
   railway up
   ```

**Option B: Render.com**

1. Sign up at [render.com](https://render.com)
2. Create Web Service from GitHub
3. Set environment variables
4. Deploy

**Option C: AWS EC2**

1. Launch EC2 instance (Ubuntu)
2. Install Python, MySQL
3. Clone repo and install dependencies
4. Run with Gunicorn/Nginx

---

## 🌐 Domain Setup (GoDaddy → Vercel)

### Step 1: In GoDaddy

1. Login to GoDaddy DNS settings
2. Go to **Manage DNS** for your domain
3. Update or add these records:

**Type: A Record**
- Name: `@` (or leave blank)
- Value: `76.76.19.20` (Vercel IP)
- TTL: 1 hour (or default)

**Type: CNAME Record**
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: 1 hour

OR

**Type: NS Records** (Preferred - Nameserver)
- Point to Vercel nameservers provided in Vercel dashboard

### Step 2: In Vercel Dashboard

1. Go to **Project Settings** → **Domains**
2. Add `adhrittechnologies.in`
3. Add `www.adhrittechnologies.in`
4. Follow Vercel's DNS configuration
5. Wait for SSL certificate (usually 5-10 minutes)

### Step 3: Update Frontend API URL

Once domain is live, update `NEXT_PUBLIC_API_URL` in Vercel:

```
https://api.adhrittechnologies.in
```

---

## 📦 API Endpoints

### Base URL
```
http://localhost:8000/api  (local)
https://api.adhrittechnologies.in  (production)
```

### Health Check
```
GET /api/health
```

### Contact Form
```
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "company": "XYZ Corp",
  "message": "Interested in automation"
}
```

### Services
```
GET /api/services
GET /api/services/{id}
POST /api/services (admin)
```

### Technology Partners
```
GET /api/technology
```

---

## 🔧 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Backend (.env)
```
DATABASE_URL=mysql+pymysql://user:password@host:3306/adhrit_db
CORS_ORIGINS=http://localhost:3000,https://adhrittechnologies.in
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

---

## 📊 Database Management

### Access Database
```bash
mysql -u root -p adhrit_db
```

### Common Queries

**View all contacts:**
```sql
SELECT * FROM contacts ORDER BY created_at DESC;
```

**View all inquiries:**
```sql
SELECT * FROM inquiries WHERE status = 'new';
```

**Update contact status:**
```sql
UPDATE contacts SET status = 'replied' WHERE id = 1;
```

---

## 🛠️ Troubleshooting

### Frontend won't start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend connection error
```bash
# Check MySQL is running
mysql -u root -p -e "SELECT 1"

# Check environment variables
cat .env

# Reinstall dependencies
pip install --upgrade -r requirements.txt
```

### CORS errors
- Verify `CORS_ORIGINS` in backend `.env`
- Frontend URL must be listed
- Restart backend after changes

### Database won't initialize
```bash
mysql -u root -p adhrit_db < ../database/schema.sql
```

---

## 📈 Performance Optimization

### Frontend
- Images: Vercel CDN automatically optimizes
- Code splitting: Next.js automatic
- Caching: Configure in `vercel.json`

### Backend
- Database connection pooling enabled
- API response caching (add as needed)
- Consider Redis for sessions

### Database
- Indexes on frequently queried columns
- Regular backups recommended
- Monitor query performance

---

## 🔐 Security Checklist

- [ ] Change MySQL default password
- [ ] Enable HTTPS (Vercel automatic)
- [ ] Add CSRF protection if needed
- [ ] Validate all form inputs
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting on API
- [ ] Regular security updates

---

## 📞 Support & Next Steps

1. **Add Admin Dashboard**: Create protected routes for managing content
2. **Email Notifications**: Send confirmation emails to admins
3. **Analytics**: Integrate Google Analytics or Mixpanel
4. **CDN**: CloudFlare for additional performance
5. **Monitoring**: Add error tracking (Sentry)

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [FastAPI Docs](https://fastapi.tiangolo.com)
- [Vercel Deployment](https://vercel.com/docs)
- [MySQL Documentation](https://dev.mysql.com/doc)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

# Adhrit Technologies - Project Structure

## 📁 Directory Layout

```
Adhrit/
├── frontend/                      # Next.js React Frontend
│   ├── app/
│   │   ├── page.tsx               # Main homepage
│   │   ├── layout.tsx             # Root layout
│   │   └── globals.css            # Global styles
│   ├── components/
│   │   ├── Navbar.tsx             # Navigation component
│   │   ├── Footer.tsx             # Footer component
│   │   └── sections/
│   │       ├── Hero.tsx           # Hero section
│   │       ├── About.tsx          # About section
│   │       ├── Services.tsx       # Services section
│   │       ├── Solutions.tsx      # Solutions section
│   │       ├── Technology.tsx     # Tech partners section
│   │       ├── Industries.tsx     # Industries section
│   │       └── Contact.tsx        # Contact form section
│   ├── lib/                       # Utility functions
│   ├── public/                    # Static assets
│   ├── package.json               # Dependencies
│   ├── next.config.js             # Next.js config
│   ├── tsconfig.json              # TypeScript config
│   ├── tailwind.config.js         # Tailwind config
│   ├── postcss.config.js          # PostCSS config
│   ├── vercel.json                # Vercel deployment config
│   ├── .gitignore                 # Git ignore rules
│   └── Dockerfile.dev             # Docker dev image
│
├── backend/                       # FastAPI Python Backend
│   ├── main.py                    # Application entry point
│   ├── config.py                  # Configuration settings
│   ├── database.py                # Database connection
│   ├── models.py                  # SQLAlchemy models
│   ├── schemas.py                 # Pydantic schemas
│   ├── routes/
│   │   ├── __init__.py            # Routes package
│   │   ├── health.py              # Health check endpoint
│   │   ├── contact.py             # Contact form endpoints
│   │   ├── services.py            # Services endpoints
│   │   └── technology.py          # Technology endpoints
│   ├── requirements.txt           # Python dependencies
│   ├── .env.example               # Environment variables template
│   ├── .gitignore                 # Git ignore rules
│   ├── Dockerfile                 # Docker production image
│   └── README.md                  # Backend documentation
│
├── database/                      # Database Configuration
│   ├── schema.sql                 # MySQL schema & seed data
│   └── README.md                  # Database documentation
│
├── docker-compose.yml             # Docker Compose config
├── SETUP_GUIDE.md                 # Complete setup guide
├── PROJECT_STRUCTURE.md           # This file
└── README.md                      # Project overview

```

---

## 🔄 Data Flow

```
User Browser (Frontend)
    ↓
Next.js App (Frontend - Vercel)
    ↓
FastAPI Backend (Railway/Render/AWS)
    ↓
MySQL Database (Cloud or Local)
```

---

## 📝 Component Descriptions

### Frontend Components

| Component | Purpose |
|-----------|---------|
| `Navbar` | Navigation bar with responsive menu |
| `Footer` | Footer with contact info and links |
| `Hero` | Landing hero section |
| `About` | Company information |
| `Services` | Service cards and descriptions |
| `Solutions` | Solutions and expertise areas |
| `Technology` | Partner brands and technologies |
| `Industries` | Industries served |
| `Contact` | Contact form with validation |

### Backend Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/health` | GET | Health check |
| `/api/contact` | POST | Submit contact form |
| `/api/contact/{id}` | GET | Get contact details |
| `/api/contact` | GET | List all contacts |
| `/api/services` | GET | Get all services |
| `/api/services/{id}` | GET | Get service by ID |
| `/api/services` | POST | Create service (admin) |
| `/api/technology` | GET | Get all technology partners |

### Database Tables

| Table | Purpose |
|-------|---------|
| `contacts` | Contact form submissions |
| `services` | Services offered |
| `solutions` | Solution expertise |
| `technologies` | Partner technologies |
| `inquiries` | Lead generation inquiries |

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **HTTP Client**: Axios

### Backend
- **Framework**: FastAPI
- **Server**: Uvicorn
- **Database ORM**: SQLAlchemy
- **Database Validation**: Pydantic
- **CORS**: FastAPI CORS middleware

### Database
- **Engine**: MySQL 8.0
- **Connector**: PyMySQL

### Deployment
- **Frontend**: Vercel
- **Backend**: Railway, Render, or AWS
- **Database**: AWS RDS or self-hosted
- **Domain**: GoDaddy + Vercel

---

## 🚀 Deployment Architecture

```
Internet Users
    ↓
Vercel CDN
    ↓
Next.js Frontend (Vercel Edge)
    ↓
FastAPI Backend (Railway/Render/AWS)
    ↓
MySQL Database
    ↓
Persistent Storage
```

---

## 📊 Development Workflow

```
1. Local Development
   ├── Frontend (npm run dev)
   ├── Backend (python main.py)
   └── Database (MySQL)

2. Version Control
   └── Git push to GitHub

3. CI/CD (Optional)
   └── GitHub Actions on push

4. Production Deployment
   ├── Frontend → Vercel
   └── Backend → Railway/Render

5. Monitoring
   ├── Vercel Analytics
   ├── Backend Logs
   └── Database Performance
```

---

## 🔐 Security Layers

1. **Frontend**
   - XSS Protection (Vercel headers)
   - CSRF Prevention (React)
   - Input Validation (React Hook Form)

2. **Backend**
   - CORS Configuration
   - Input Validation (Pydantic)
   - Database Connection Security

3. **Transport**
   - HTTPS (Vercel automatic)
   - SSL/TLS Encryption

4. **Database**
   - Password-protected connections
   - User permissions per table
   - Regular backups

---

## 📈 Scalability Considerations

### Current Architecture (MVP)
- Single backend instance
- Single database instance
- Suitable for: ~1000 concurrent users

### Future Scaling
- Load balancer with multiple backend instances
- Database replication (master-slave)
- Redis cache layer
- CDN for static assets
- Database sharding if needed

---

## 🔄 CI/CD Pipeline (Optional Setup)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy Frontend
        run: |
          cd frontend
          npm install
          vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
      
      - name: Deploy Backend
        run: |
          cd backend
          # Deploy to Railway/Render/AWS
```

---

## 📚 Key Files Reference

| File | Purpose |
|------|---------|
| `frontend/app/page.tsx` | Main homepage entry |
| `backend/main.py` | Backend entry point |
| `database/schema.sql` | Database schema |
| `.env` | Environment variables |
| `vercel.json` | Vercel deployment config |
| `docker-compose.yml` | Docker setup |
| `SETUP_GUIDE.md` | Complete setup instructions |

---

## 🆘 Common Issues

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti :3000 | xargs kill -9

# Kill process on port 8000
lsof -ti :8000 | xargs kill -9
```

### Database Connection Failed
- Verify MySQL is running
- Check credentials in .env
- Ensure database is created

### CORS Errors
- Add frontend URL to `CORS_ORIGINS` in .env
- Restart backend server

### Build Errors
- Clear cache: `rm -rf .next` (frontend), `rm -rf __pycache__` (backend)
- Reinstall dependencies
- Check Node.js version >= 18

---

## 📞 Support Resources

- Frontend Issues: [Next.js Discord](https://discord.gg/bUG7V7H)
- Backend Issues: [FastAPI Discord](https://discord.gg/VQjSR6fjNg)
- Deployment: [Vercel Support](https://vercel.com/support)
- Database: [MySQL Forums](https://forums.mysql.com)

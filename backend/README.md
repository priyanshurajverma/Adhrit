# Adhrit Technologies Backend API

FastAPI-based REST API for Adhrit Technologies website.

## 🚀 Quick Start

### Local Development
```bash
# Setup virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Edit .env with your database credentials

# Run development server
python main.py
# API available at http://localhost:8000
# Docs at http://localhost:8000/docs
```

### Docker
```bash
docker build -t adhrit-backend .
docker run -p 8000:8000 \
  -e DATABASE_URL="mysql+pymysql://user:pass@host/db" \
  adhrit-backend
```

## 📚 API Documentation

### Interactive Docs
Visit `http://localhost:8000/docs` for interactive Swagger UI.

### Health Check
```bash
curl http://localhost:8000/api/health
```

Response:
```json
{
  "status": "ok",
  "message": "Adhrit Technologies API is running",
  "version": "1.0.0"
}
```

### Contact Form
**Create Contact**
```bash
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210",
    "company": "XYZ Corp",
    "message": "Interested in automation solutions"
  }'
```

**Get Contact**
```bash
curl http://localhost:8000/api/contact/1
```

**List Contacts**
```bash
curl "http://localhost:8000/api/contact?skip=0&limit=10"
```

### Services
**Get All Services**
```bash
curl http://localhost:8000/api/services
```

**Get Service by ID**
```bash
curl http://localhost:8000/api/services/1
```

**Create Service** (Admin only)
```bash
curl -X POST http://localhost:8000/api/services \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Service",
    "description": "Service description",
    "icon": "Cpu",
    "category": "Core Services"
  }'
```

### Technology Partners
**Get All Partners**
```bash
curl http://localhost:8000/api/technology
```

## 🗂️ Project Structure

```
backend/
├── main.py              # Entry point
├── config.py            # Configuration
├── database.py          # Database setup
├── models.py            # SQLAlchemy models
├── schemas.py           # Pydantic schemas
├── routes/
│   ├── __init__.py
│   ├── health.py        # Health checks
│   ├── contact.py       # Contact endpoints
│   ├── services.py      # Service endpoints
│   └── technology.py    # Technology endpoints
├── requirements.txt     # Dependencies
├── .env.example         # Environment template
├── Dockerfile           # Docker config
└── README.md           # This file
```

## 🔧 Environment Variables

Create `.env` file:

```env
# Database Configuration
DATABASE_URL=mysql+pymysql://root:password@localhost:3306/adhrit_db

# CORS Origins (comma-separated)
CORS_ORIGINS=http://localhost:3000,http://localhost:8000,https://adhrittechnologies.in

# Email Configuration (Optional)
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

## 📦 Dependencies

```
fastapi==0.104.1
uvicorn==0.24.0
python-multipart==0.0.6
python-dotenv==1.0.0
sqlalchemy==2.0.23
pymysql==1.1.0
pydantic==2.5.0
pydantic-settings==2.1.0
email-validator==2.1.0
python-cors==0.0.6
```

## 🗄️ Database Models

### Contact
```python
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "company": "XYZ Corp",
  "message": "Message content",
  "status": "new",  # new, replied, closed
  "created_at": "2024-01-15T10:00:00",
  "updated_at": "2024-01-15T10:00:00"
}
```

### Service
```python
{
  "id": 1,
  "name": "Industrial Automation",
  "description": "End-to-end automation...",
  "icon": "Cpu",
  "category": "Core Services",
  "is_active": true,
  "created_at": "2024-01-15T10:00:00"
}
```

### Solution
```python
{
  "id": 1,
  "name": "OEE Improvement",
  "description": "Increase Overall Equipment...",
  "metrics": "+35% Improvement",
  "icon": "TrendingUp",
  "is_active": true,
  "created_at": "2024-01-15T10:00:00"
}
```

### Technology
```python
{
  "id": 1,
  "name": "EXOR",
  "category": "Industrial Visualization",
  "logo_url": "https://...",
  "is_active": true,
  "created_at": "2024-01-15T10:00:00"
}
```

## 🔐 Security

- CORS middleware configured
- Input validation with Pydantic
- SQL injection prevention (SQLAlchemy ORM)
- Environment variables for sensitive data
- Email validation
- Error handling without sensitive info leakage

## 🚀 Deployment

### Railway
```bash
# Link to Railway project
railway login
railway link

# Deploy
railway up
```

### Render
1. Connect GitHub repo
2. Create Web Service
3. Set environment variables
4. Deploy

### Docker
```bash
# Build
docker build -t adhrit-backend .

# Run
docker run -p 8000:8000 \
  -e DATABASE_URL="..." \
  -e CORS_ORIGINS="..." \
  adhrit-backend
```

## 📊 Database Maintenance

### Backup
```bash
mysqldump -u root -p adhrit_db > backup.sql
```

### Restore
```bash
mysql -u root -p adhrit_db < backup.sql
```

### Check Tables
```bash
mysql -u root -p adhrit_db
SHOW TABLES;
DESCRIBE contacts;
```

## 🛠️ Troubleshooting

### Port Already in Use
```bash
# Find and kill process on 8000
lsof -ti :8000 | xargs kill -9
```

### Database Connection Error
- Verify MySQL is running
- Check DATABASE_URL format
- Test connection:
  ```bash
  mysql -u root -p -h localhost adhrit_db -e "SELECT 1;"
  ```

### Import Error
```bash
# Reinstall dependencies
pip install --upgrade -r requirements.txt
```

### CORS Error in Frontend
- Add frontend URL to CORS_ORIGINS in .env
- Restart backend server

## 📈 Performance Tips

- Database indexes are configured
- Connection pooling enabled
- Async endpoints for I/O operations
- Response validation cached
- Consider Redis for session storage (future)

## 📝 Logging

Add logging to track requests:

```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.get("/api/test")
async def test():
    logger.info("Test endpoint called")
    return {"status": "ok"}
```

## 🔄 Future Enhancements

- [ ] Authentication/JWT
- [ ] Admin dashboard endpoints
- [ ] Email notifications
- [ ] Rate limiting
- [ ] Request logging
- [ ] Caching with Redis
- [ ] Database migrations with Alembic
- [ ] Unit and integration tests
- [ ] API versioning (v1, v2)
- [ ] Webhooks for external systems

## 📚 Resources

- [FastAPI Docs](https://fastapi.tiangolo.com)
- [SQLAlchemy](https://docs.sqlalchemy.org)
- [Pydantic](https://docs.pydantic.dev)
- [MySQL Connector](https://dev.mysql.com)

## 📞 Support

For API issues:
1. Check `/docs` endpoint
2. Review `.env` configuration
3. Check database connection
4. Review application logs

---

**Version**: 1.0.0  
**Python**: 3.9+  
**Last Updated**: April 2026

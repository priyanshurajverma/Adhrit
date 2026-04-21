import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    # API Settings
    API_V1_STR: str = "/api"
    PROJECT_NAME: str = "Adhrit Technologies API"
    PROJECT_VERSION: str = "1.0.0"
    
    # Database Settings
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "mysql+pymysql://root:password@localhost:3306/adhrit_db"
    )
    
    # CORS Settings
    CORS_ORIGINS: list = [
        "http://localhost:3000",
        "http://localhost:8000",
        "https://adhrittechnologies.in",
        "https://www.adhrittechnologies.in",
    ]
    
    # Email Settings (optional)
    SMTP_SERVER: str = os.getenv("SMTP_SERVER", "smtp.gmail.com")
    SMTP_PORT: int = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USER: str = os.getenv("SMTP_USER", "")
    SMTP_PASSWORD: str = os.getenv("SMTP_PASSWORD", "")

settings = Settings()

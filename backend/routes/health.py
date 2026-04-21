from fastapi import APIRouter
from schemas import HealthResponse
from config import settings

router = APIRouter(tags=["Health"])


@router.get("/health", response_model=HealthResponse)
async def health_check():
    """
    Health check endpoint
    """
    return {
        "status": "ok",
        "message": "Adhrit Technologies API is running",
        "version": settings.PROJECT_VERSION,
    }

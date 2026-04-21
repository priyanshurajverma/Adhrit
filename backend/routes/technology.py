from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Technology
from schemas import TechnologyResponse

router = APIRouter(prefix="/technology", tags=["Technology"])


@router.get("/", response_model=list[TechnologyResponse])
async def list_technology(
    db: Session = Depends(get_db)
):
    """
    Get all technology partners
    """
    technologies = db.query(Technology).filter(Technology.is_active == True).all()
    return technologies

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Service
from schemas import ServiceCreate, ServiceResponse

router = APIRouter(prefix="/services", tags=["Services"])


@router.get("/", response_model=list[ServiceResponse])
async def list_services(
    db: Session = Depends(get_db)
):
    """
    Get all active services
    """
    services = db.query(Service).filter(Service.is_active == True).all()
    return services


@router.get("/{service_id}", response_model=ServiceResponse)
async def get_service(
    service_id: int,
    db: Session = Depends(get_db)
):
    """
    Get a specific service
    """
    service = db.query(Service).filter(Service.id == service_id).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return service


@router.post("/", response_model=ServiceResponse)
async def create_service(
    service: ServiceCreate,
    db: Session = Depends(get_db)
):
    """
    Create a new service (admin only)
    """
    db_service = Service(**service.dict())
    db.add(db_service)
    db.commit()
    db.refresh(db_service)
    return db_service

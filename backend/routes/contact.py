from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Contact
from schemas import ContactCreate, ContactResponse

router = APIRouter(prefix="/contact", tags=["Contact"])


@router.post("/", response_model=ContactResponse)
async def create_contact(
    contact: ContactCreate,
    db: Session = Depends(get_db)
):
    """
    Create a new contact form submission
    """
    db_contact = Contact(
        name=contact.name,
        email=contact.email,
        phone=contact.phone,
        company=contact.company,
        message=contact.message,
    )
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    
    # TODO: Send email notification to admin
    print(f"New contact submission from {contact.email}")
    
    return db_contact


@router.get("/{contact_id}", response_model=ContactResponse)
async def get_contact(
    contact_id: int,
    db: Session = Depends(get_db)
):
    """
    Get a specific contact submission
    """
    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    return contact


@router.get("/", response_model=list[ContactResponse])
async def list_contacts(
    skip: int = 0,
    limit: int = 10,
    db: Session = Depends(get_db)
):
    """
    List all contact submissions (admin only)
    """
    contacts = db.query(Contact).offset(skip).limit(limit).all()
    return contacts

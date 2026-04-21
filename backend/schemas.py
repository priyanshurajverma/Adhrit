from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


# Contact Form Schemas
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str


class ContactResponse(ContactCreate):
    id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True


# Service Schemas
class ServiceCreate(BaseModel):
    name: str
    description: str
    icon: Optional[str] = None
    category: Optional[str] = None


class ServiceResponse(ServiceCreate):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True


# Solution Schemas
class SolutionCreate(BaseModel):
    name: str
    description: str
    metrics: Optional[str] = None
    icon: Optional[str] = None


class SolutionResponse(SolutionCreate):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True


# Technology Schemas
class TechnologyCreate(BaseModel):
    name: str
    category: str
    logo_url: Optional[str] = None


class TechnologyResponse(TechnologyCreate):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True


# Inquiry Schemas
class InquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    industry: Optional[str] = None
    service_interested: Optional[str] = None
    description: Optional[str] = None
    budget_range: Optional[str] = None
    timeline: Optional[str] = None


class InquiryResponse(InquiryCreate):
    id: int
    status: str
    source: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


# Health Check Response
class HealthResponse(BaseModel):
    status: str
    message: str
    version: str

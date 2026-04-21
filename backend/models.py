from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, Enum
from sqlalchemy.sql import func
from datetime import datetime
from database import Base
import enum


class Contact(Base):
    """Contact form submissions"""
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(20), nullable=True)
    company = Column(String(255), nullable=True)
    message = Column(Text, nullable=False)
    status = Column(String(50), default="new")  # new, replied, closed
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())


class Service(Base):
    """Services offered by Adhrit"""
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False, unique=True)
    description = Column(Text, nullable=False)
    icon = Column(String(50), nullable=True)
    category = Column(String(100), nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Solution(Base):
    """Solutions and expertise areas"""
    __tablename__ = "solutions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False, unique=True)
    description = Column(Text, nullable=False)
    metrics = Column(String(255), nullable=True)  # e.g., "+35% Improvement"
    icon = Column(String(50), nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Technology(Base):
    """Partner technologies and brands"""
    __tablename__ = "technologies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False, unique=True)
    category = Column(String(100), nullable=False)
    logo_url = Column(String(500), nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Inquiry(Base):
    """Project inquiries (lead generation)"""
    __tablename__ = "inquiries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(20), nullable=True)
    company = Column(String(255), nullable=True)
    industry = Column(String(100), nullable=True)
    service_interested = Column(String(255), nullable=True)
    description = Column(Text, nullable=True)
    budget_range = Column(String(50), nullable=True)
    timeline = Column(String(100), nullable=True)
    status = Column(String(50), default="new")  # new, contacted, qualified, closed
    source = Column(String(100), default="website")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

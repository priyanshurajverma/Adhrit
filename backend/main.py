from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import os
from dotenv import load_dotenv
from config import settings

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": settings.CORS_ORIGINS}})

# Lazy database import
db_engine = None
SessionLocal = None

def get_db_session():
    global db_engine, SessionLocal
    if db_engine is None:
        from database import engine, SessionLocal as SL
        db_engine = engine
        SessionLocal = SL
    return SessionLocal()

# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy", "message": "API is running", "timestamp": datetime.utcnow().isoformat()}), 200

# Contact endpoints
@app.route('/api/contact', methods=['POST'])
def create_contact():
    try:
        from models import Contact
        db = get_db_session()
        data = request.get_json()
        
        required_fields = ['name', 'email', 'phone', 'company', 'message']
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing required fields"}), 400
        
        contact = Contact(
            name=data['name'],
            email=data['email'],
            phone=data['phone'],
            company=data['company'],
            message=data['message'],
            created_at=datetime.utcnow()
        )
        
        db.add(contact)
        db.commit()
        
        return jsonify({
            "id": contact.id,
            "name": contact.name,
            "email": contact.email,
            "message": "Contact created successfully"
        }), 201
    except Exception as e:
        if db:
            db.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        if db:
            db.close()

@app.route('/api/contact/<int:contact_id>', methods=['GET'])
def get_contact(contact_id):
    try:
        from models import Contact
        db = get_db_session()
        contact = db.query(Contact).filter(Contact.id == contact_id).first()
        
        if not contact:
            return jsonify({"error": "Contact not found"}), 404
        
        return jsonify({
            "id": contact.id,
            "name": contact.name,
            "email": contact.email,
            "phone": contact.phone,
            "company": contact.company,
            "message": contact.message,
            "created_at": contact.created_at.isoformat()
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if db:
            db.close()

@app.route('/api/contact', methods=['GET'])
def list_contacts():
    try:
        from models import Contact
        db = get_db_session()
        skip = request.args.get('skip', 0, type=int)
        limit = request.args.get('limit', 10, type=int)
        
        contacts = db.query(Contact).offset(skip).limit(limit).all()
        total = db.query(Contact).count()
        
        return jsonify({
            "contacts": [
                {
                    "id": c.id,
                    "name": c.name,
                    "email": c.email,
                    "phone": c.phone,
                    "company": c.company,
                    "created_at": c.created_at.isoformat()
                }
                for c in contacts
            ],
            "total": total
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if db:
            db.close()

# Services endpoints
@app.route('/api/services', methods=['GET'])
def list_services():
    try:
        from models import Service
        db = get_db_session()
        services = db.query(Service).all()
        
        return jsonify({
            "services": [
                {
                    "id": s.id,
                    "name": s.name,
                    "description": s.description,
                    "icon": s.icon
                }
                for s in services
            ]
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if db:
            db.close()

@app.route('/api/services/<int:service_id>', methods=['GET'])
def get_service(service_id):
    try:
        from models import Service
        db = get_db_session()
        service = db.query(Service).filter(Service.id == service_id).first()
        
        if not service:
            return jsonify({"error": "Service not found"}), 404
        
        return jsonify({
            "id": service.id,
            "name": service.name,
            "description": service.description,
            "icon": service.icon
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if db:
            db.close()

# Technology endpoints
@app.route('/api/technology', methods=['GET'])
def list_technologies():
    try:
        from models import Technology
        db = get_db_session()
        technologies = db.query(Technology).all()
        
        return jsonify({
            "technologies": [
                {
                    "id": t.id,
                    "name": t.name,
                    "logo_url": t.logo_url
                }
                for t in technologies
            ]
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if db:
            db.close()

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    print("🚀 Starting Adhrit Technologies API on Flask...")
    print("📍 Running on http://localhost:5000")
    print("✅ Press Ctrl+C to stop")
    app.run(debug=False, host='0.0.0.0', port=5000)

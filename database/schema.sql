-- Create Database
CREATE DATABASE IF NOT EXISTS adhrit_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE adhrit_db;

-- Contacts Table (Contact Form Submissions)
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    message LONGTEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Services Table
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description LONGTEXT NOT NULL,
    icon VARCHAR(50),
    category VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Solutions Table
CREATE TABLE IF NOT EXISTS solutions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description LONGTEXT NOT NULL,
    metrics VARCHAR(255),
    icon VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Technologies Table (Partners)
CREATE TABLE IF NOT EXISTS technologies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    category VARCHAR(100) NOT NULL,
    logo_url VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inquiries Table (Lead Generation)
CREATE TABLE IF NOT EXISTS inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    industry VARCHAR(100),
    service_interested VARCHAR(255),
    description LONGTEXT,
    budget_range VARCHAR(50),
    timeline VARCHAR(100),
    status VARCHAR(50) DEFAULT 'new',
    source VARCHAR(100) DEFAULT 'website',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_source (source),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert Sample Data
INSERT INTO services (name, description, icon, category, is_active) VALUES
('Industrial Automation', 'End-to-end automation solutions for manufacturing processes', 'Cpu', 'Core Services', TRUE),
('Machine Retrofit', 'Modernize existing machinery with advanced control systems', 'Wrench', 'Core Services', TRUE),
('Vision Systems', 'AI-powered visual inspection and quality control systems', 'Camera', 'Core Services', TRUE),
('IoT Solutions', 'Connected devices and real-time data analytics platform', 'Network', 'Core Services', TRUE),
('Machine Integration', 'Seamless integration of multiple machines and systems', 'Zap', 'Core Services', TRUE),
('Digital Transformation', 'Complete digital overhaul of manufacturing operations', 'Globe', 'Core Services', TRUE);

INSERT INTO solutions (name, description, metrics, icon, is_active) VALUES
('OEE Improvement', 'Increase Overall Equipment Effectiveness through data-driven insights', '+35% Improvement', 'TrendingUp', TRUE),
('Productivity Optimization', 'Streamline workflows and eliminate bottlenecks', '+40% Output', 'Gauge', TRUE),
('Predictive Maintenance', 'AI-powered maintenance scheduling reduces downtime', '-60% Downtime', 'Wrench', TRUE),
('EHS Management', 'Comprehensive Environment, Health & Safety solutions', '100% Compliance', 'AlertTriangle', TRUE),
('Sustainability', 'Reduce energy consumption and environmental impact', '-30% Energy', 'Leaf', TRUE);

INSERT INTO technologies (name, category, is_active) VALUES
('EXOR', 'Industrial Visualization', TRUE),
('Eurotherm', 'Process Control', TRUE),
('Mitsubishi', 'Automation Systems', TRUE),
('Control Techniques', 'Drive Systems', TRUE);

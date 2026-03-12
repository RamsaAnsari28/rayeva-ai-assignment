# Rayeva AI Systems Assignment

## Overview

This project implements AI-powered backend modules for sustainable ecommerce automation.

The system reduces manual catalog effort and generates sustainability insights using structured AI outputs.

The backend is built using Node.js and Express with a modular architecture separating AI prompts, services, and API routes.

---

## Implemented Modules

### Module 1 – AI Auto Category & Tag Generator

Automatically categorizes products and generates SEO metadata.

**Input**

* Product name
* Product description

**Output (Structured JSON)**

```
{
 "primary_category": "Personal Care",
 "sub_category": "Oral Care",
 "seo_tags": ["bamboo toothbrush","eco friendly toothbrush"],
 "sustainability_filters": ["plastic-free","vegan"]
}
```

The result is stored in the database.

---

### Module 3 – AI Impact Reporting Generator

Generates sustainability impact insights.

**Outputs**

* Estimated plastic saved
* Carbon avoided
* Local sourcing impact
* Human readable sustainability statement

Example:

```
{
 "plastic_saved": "25g",
 "carbon_avoided": "0.2kg CO2",
 "impact_statement": "Using this product reduces plastic waste and lowers carbon footprint."
}
```

---

## Architecture

The project follows a modular backend architecture.

```
routes      → API endpoints
services    → AI interaction logic
prompts     → Prompt engineering layer
database    → JSON storage
logs        → Prompt + response logging
```

This ensures separation between **AI logic and business logic**.

---

## Prompt Design

AI prompts are designed to enforce **structured JSON outputs** so the system can easily process AI responses programmatically.

Example prompt instruction:

"Generate product categorization including primary category, sub-category, SEO tags and sustainability filters in JSON format."

---

## Logging

Each AI request logs:

* Prompt
* AI response
* Timestamp

Stored inside:

```
logs/aiLogs.json
```

---

## Database

AI generated outputs are stored in:

```
database/data.json
```

Each entry includes:

* Product information
* AI output
* Unique ID
* Timestamp

---

## Additional Features

* Input validation using Joi
* Error handling
* Health monitoring endpoint
* Structured API responses

---

## Architecture for Remaining Modules

### Module 2 – AI B2B Proposal Generator

Planned architecture:

Client → API → AI Service → Database

Inputs:

* Business type
* Budget

AI generates:

* Sustainable product mix
* Budget allocation
* Cost breakdown
* Impact positioning summary

---

### Module 4 – AI WhatsApp Support Bot

Architecture:

WhatsApp API → Backend webhook → AI service → Database

Features:

* Order status lookup
* Return policy answers
* Refund escalation to human support
* Conversation logging

---

## Running the Project

Install dependencies

```
npm install
```

Start server

```
node server.js
```

Server runs on

```
http://localhost:5000
```

---

## API Endpoints

Category Generator

```
POST /ai/category
```

Impact Generator

```
POST /ai/impact
```

Health Check

```
GET /health
```

---

## Tech Stack

Backend: Node.js + Express

AI Layer: Prompt based generation

Validation: Joi

Storage: JSON database

Logging: File based logging

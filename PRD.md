# Name Generator Backend - Technical Requirements Document

## 1. System Overview

### 1.1 Purpose
Create a backend service for a name generator application targeting gamers, providing randomly generated names based on specific criteria.

### 1.2 Core Features
- Generate names based on user-defined parameters
- Support multiple genres
- Provide similar name suggestions
- Handle basic error cases
- Ensure scalability for future features

## 2. Technical Architecture

### 2.1 Technology Stack
- Runtime: Bun
- Framework: Hono
- Database: SQLite
- ORM: Prisma
- API Documentation: OpenAPI/Scalar

### 2.2 Database Schema

#### NameComponent Table
- id (UUID)
- component (String)
- genres (String[])
- genderAssociation (String[])
- styleTags (String[])
- timestamps (created_at, updated_at)

#### Genre Table
- id (UUID)
- name (String, unique)
- description (String)
- parentGenre (String, nullable)
- weight (Float)
- timestamps (created_at, updated_at)

## 3. API Endpoints

### 3.1 Name Generation
```
GET /api/names/generate?genres=id1,id2&genderPreference=neutral&nameLength=2&count=10
```
#### Query Parameters
- genres: string[] (1-3 genre IDs)
- genderPreference: "neutral" | "masculine" | "feminine"
- nameLength: number (1-3)
- count: number (optional, default: 10)

### 3.2 Similar Names
```
GET /api/names/similar?components=id1,id2,id3&count=10
```
#### Query Parameters
- components: string[] (component IDs from original name)
- count: number (optional, default: 10)

## 4. Core Functionalities

### 4.1 Name Generation Algorithm
1. Component Selection
   - Filter by requested genres
   - Filter by gender preference
   - Respect name length requirement

2. Name Assembly
   - Random combination of filtered components
   - Respect requested name length

3. Similar Name Generation
   - Query original components' data (genres, gender, style tags)
   - Find components with matching style tags
   - Generate new combinations using similar components

### 4.2 Error Handling
- Invalid parameters
- Database connection issues
- Rate limiting errors
- Generic 500 errors

## 5. Data Requirements

### 5.1 Initial Data
- Minimum 100 components with good variety
- At least 5 basic genres (fantasy, sci-fi, medieval, etc.)
- Basic style tags for similarity matching

### 5.2 Data Validation
- Component uniqueness
- Valid genre references
- Valid gender associations
- Style tag consistency

## 6. Performance Requirements

### 6.1 Response Times
- Name generation: < 500ms
- Similar names: < 750ms
- Error responses: < 100ms

### 6.2 Concurrency
- Handle 100 concurrent requests
- Implement basic rate limiting

## 7. Future Considerations (Post-MVP)

### 7.1 Planned Features
- Add advertisement for revenue
- Add advanced settings menu
  - Add cultural tags, like "Greek", "Viking", etc.

### 7.2 Technical Preparations
- Schema extensibility
- API versioning
- Monitoring setup
- Cache preparation

## 8. Development Guidelines

### 8.1 Code Organization
- Route-based structure
- Separate business logic
- Centralized error handling
- Type safety throughout

### 8.2 Testing Requirements
- Unit tests for core functions
- API endpoint tests
- Data validation tests
- Error handling tests

## 9. Documentation Requirements

### 9.1 API Documentation
- OpenAPI/Scalar specs
- Example requests/responses
- Error codes and messages
- Rate limiting details

### 9.2 Technical Documentation
- Setup instructions
- Database schema
- Component architecture
- Deployment process

## 10. Security Considerations

### 10.1 MVP Security Features
- Basic rate limiting
- Input validation
- Error message sanitization
- CORS configuration

## 11. Success Metrics

### 11.1 Technical Metrics
- Response time < 500ms
- Error rate < 1%
- System uptime > 99%
- Successful name generation rate > 99%
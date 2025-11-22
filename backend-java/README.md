# Java Spring Boot Student Login Backend

This backend provides a REST API for student login using MySQL.

## Features
- Student login endpoint
- MySQL database connection
- Environment variable configuration

## How to Run
1. Configure your MySQL database and update `src/main/resources/application.properties`.
2. Build and run the Spring Boot application:
   ```
   ./mvnw spring-boot:run
   ```
3. The API will be available at `http://localhost:8080/api/login`.

## Endpoints
- `POST /api/login` — Login with student ID and password

## Project Structure
- `Student.java` — Entity
- `StudentRepository.java` — Repository
- `StudentController.java` — REST Controller

---
Replace placeholders as needed for your environment.

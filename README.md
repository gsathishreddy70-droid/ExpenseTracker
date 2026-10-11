# ExpenseTracker

Full-stack Expense Tracking application featuring a **React / Vite** frontend, a **Spring Boot** REST backend, and a **MySQL** database.

---

## 🚀 Quick Start (Local Deployment on Windows)

Both the frontend and backend can be started and stopped with convenient scripts:

### 1. One-Click Start
Double-click `start.bat` or run:
```powershell
.\start.bat
```
This script will:
- Verify that your MySQL service (`MySQL80`) is running.
- Start the Spring Boot backend on **http://localhost:8081**.
- Start the React/Vite frontend on **http://localhost:5173**.

### 2. Access the Application
- **Frontend UI:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:8081/expenses](http://localhost:8081/expenses)

### 3. Stop the Application
Double-click `stop.bat` or run:
```powershell
.\stop.bat
```

---

## 🛠 Manual Local Run

### Prerequisites
- **Java 21+** (`java -version`)
- **Node.js 20+** & **npm** (`node -v`, `npm -v`)
- **MySQL 8.0** running on `localhost:3306` with database `expensetracker`

### Step 1: Database Setup
Ensure MySQL is running and the database exists:
```sql
CREATE DATABASE IF NOT EXISTS expensetracker;
```

### Step 2: Backend (Spring Boot)
```bash
cd expensetracker
# Optional: override default credentials if needed
# $env:DB_PASSWORD="your_password"
.\mvnw.cmd clean package -DskipTests
java -jar target/expensetracker-0.0.1-SNAPSHOT.jar
```
Backend runs on port `8081`.

### Step 3: Frontend (React / Vite)
```bash
cd FrontEnd
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```
Frontend runs on port `5173`.

---

## 🐳 Containerized Deployment (Docker Compose)

To deploy across Linux, macOS, VPS, or cloud servers using Docker:

```bash
docker compose up -d --build
```

This starts:
- **`expensetracker-db`**: MySQL 8.0 database (port 3306) with healthchecks
- **`expensetracker-backend`**: Spring Boot Java 21 container (port 8081)
- **`expensetracker-frontend`**: Production Nginx container serving built React assets (port 80)

To stop:
```bash
docker compose down
```

---

## ☁️ Cloud Deployment Options

### Option A: Railway / Render / AWS ECS
- Deploy `docker-compose.yml` directly or deploy each service:
  1. **Database:** Managed MySQL (e.g. AWS RDS, Railway MySQL, PlanetScale, Aiven).
  2. **Backend:** Deploy `expensetracker/Dockerfile` with environment variables:
     - `DB_URL`: `jdbc:mysql://<db-host>:3306/<db-name>`
     - `DB_USERNAME`: `<db-user>`
     - `DB_PASSWORD`: `<db-pass>`
  3. **Frontend:** Deploy `FrontEnd` on Vercel, Netlify, or as `FrontEnd/Dockerfile` on Render/Railway. Set `VITE_API_BASE_URL` to your backend URL.
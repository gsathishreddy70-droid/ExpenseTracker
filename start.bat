@echo off
echo ========================================================
echo        Starting Expense Tracker Application
echo ========================================================

:: 1. Check MySQL Service
echo [1/3] Checking MySQL service...
sc query MySQL80 | find "RUNNING" >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo [OK] MySQL80 service is running.
) else (
    echo [INFO] Starting MySQL80 service...
    net start MySQL80 >nul 2>&1
)

:: 2. Start Backend Spring Boot
echo [2/3] Starting Spring Boot Backend (Port 8081)...
cd /d "%~dp0expensetracker"
set DB_PASSWORD=root
start "Expense Tracker Backend" java -jar target\expensetracker-0.0.1-SNAPSHOT.jar

:: 3. Start Frontend React Vite
echo [3/3] Starting React Frontend (Port 5173)...
cd /d "%~dp0FrontEnd"
start "Expense Tracker Frontend" cmd /c "npm.cmd run dev -- --host 0.0.0.0 --port 5173"

echo ========================================================
echo Application started successfully!
echo Frontend: http://localhost:5173
echo Backend API: http://localhost:8081/expenses
echo ========================================================
pause

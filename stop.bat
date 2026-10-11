@echo off
echo Stopping Expense Tracker services...

:: Find and stop Java backend running on port 8081
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":8081" ^| findstr "LISTENING"') do (
    echo Stopping backend process with PID %%a...
    taskkill /F /PID %%a >nul 2>&1
)

:: Find and stop frontend node process running on port 5173
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":5173" ^| findstr "LISTENING"') do (
    echo Stopping frontend process with PID %%a...
    taskkill /F /PID %%a >nul 2>&1
)

echo Services stopped.
pause

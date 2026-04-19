@echo off
echo Stopping any existing server on port 3001...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3001') do (
    taskkill /F /PID %%a 2>nul
)
timeout /t 2 /nobreak >nul
echo Starting server...
cd server
node index.js

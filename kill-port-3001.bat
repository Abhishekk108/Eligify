@echo off
echo Checking for processes on port 3001...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3001') do (
    echo Found process: %%a
    taskkill /F /PID %%a
)
echo Port 3001 is now free!
pause

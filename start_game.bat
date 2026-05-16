@echo off
echo =======================================================
echo     Starting Operation Prometheus Local Development
echo =======================================================
echo.

start "Prometheus Backend" cmd /k "cd server && npm run dev"
start "Prometheus Frontend" cmd /k "npm run dev"

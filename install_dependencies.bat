@echo off
echo =======================================================
echo     Installing Dependencies for Operation Prometheus
echo =======================================================
echo.
echo Step 1/2: Installing Frontend Dependencies...
echo Please wait, this may take a few minutes...
set NODE_ENV=development
call npm install --include=dev --legacy-peer-deps

echo.
echo Step 2/2: Installing Backend Server Dependencies...
echo Please wait, this may take another minute...
cd server
call npm install --include=dev --legacy-peer-deps
cd ..

echo.
echo =======================================================
echo Installation Complete! 
echo Check above for any red ERROR messages. If none are seen, 
echo you are ready to run start_game.bat!
echo =======================================================
pause

@echo off
echo Building the project...
call npm run build:production

echo.
echo Build completed! 
echo.
echo Next steps:
echo 1. Upload the entire contents of the 'build' folder to your server
echo 2. Make sure to upload the .htaccess file as well
echo 3. Ensure your server supports .htaccess files (Apache)
echo.
echo Files to upload:
echo - All files from build/ folder
echo - .htaccess file (for Apache servers)
echo.
echo Your website should now work with proper CSS loading!
echo.
pause

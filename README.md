# Demo_playwright
 0 Setup
 - Instal IDE visual studio code to view + run Tcs
 - Instal node js to system ( google if neeed help)
 - Check version node 
    - Run cmd on wwin/ terminal on Macos
    - Run scrip node --version


1 Run Tcs
- select terminal on IDE
- select new terminal run this scrip to run Tcs on chrome 
    - npx playwright test ./tests/*Tcs Name* c --headed 
// Note
--head to view, record action 
--project chromium run Tcs on chrome browser 

2 View report 
run scrip on terminal after run Tcs 
    - npx playwright show-report
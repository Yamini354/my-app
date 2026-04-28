android -> playstore -> facebookApp

nodejs -> npm -> angular


SetUp:
------
1) Download and install nodejs

    check: node -v
           npm -v

2) Install angular

    npm install -g @angular/cli@15

    check: ng version

3) create new app

    cd desktop   (cd - change directory)
    ng new my-app
    

4) start the server
    cd my-app 
    ng serve

    check: in browser localhost:4200

**) allow scripts exection form powershell
    1) open powershell as administrator
    2) run command:  set-executionPolicy unrestricted




to create new components
========================
ng g c login

to start the angular server : ng serve
    
GIT:
====

1) laptopGitSoftware <-> github site (in cmd)

    git config --global user.name Yamini354
    git config --global user.email xxxxxxxxxxxxxx

    check: git config --list

2) my-app  <-> repository  (in vs code terminal)

    git init
    git remote add origin https://github.com/Yamini354/my-app.git

    check: git remote -v

3) code sync (in vs code terminal) (to add updated code)

    git add .                      //  changes -> stagedChanged
    git commit -m "xxxxxxxx"       //  stagedChange -> 0
    git push                       //  100%

    ***) first time suggestion command with -f

API INTEGRATION:
================

0) create component and service

1) import HTTPClient module



2) Inject HttpClient service in VehicleService
    get, post, put, delete

3) do api call with get that will return observable of data

4) Inject vehicleService in VehicleCompoennt
   and subscribe to listen the data

5) loop in html to display the data.
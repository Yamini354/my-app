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

    to remove origin: git remote remove origin

    to check the status: git status

    check: git remote -v

3) code sync (in vs code terminal) (to add updated code)

    git add .                      //  changes -> stagedChanged
    git commit -m "xxxxxxxx"       //  stagedChange -> 0
    git push                       //  100%

    ***) first time suggestion command with -f

4) with branches

    1) create branch in github
    2) get branch in local and shift to that branch

            git fetch
            git checkout XXXXX

            check: git branch

    3) after code complete:

            git add .
            git commit -m "xxxxxxx"
            git pull origin master
            git push
        
    4) raise pull request, add merge.


( 4) to create branch:
    step-1)git branch branchname (only create branch)
    step-2)git checkout branchname
                    or 
    git checkout -b branchname(it create branch and fetches the data)

    to shift the branchs: git checkout branchname

5) getting code from git to our system:
    git pull origin master

6) to get child branch data to master branch
    step-1: we have to be in master
    step-2:check the status by using: git status or git branch (hear we can find where we are)
            if we are not in master branch then : git checkout master
    step-3:git pull origin master

7) to get fresh code from git to our system :
git clone url(https://github.com/Yamini354/my-app.git)
hear we don't get node modules file. so we need to use command to install: 
    npm i
)


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

====
1)  get     get(url)                         all

2)  get     get(url/id)                      single

3)  get     get(url?filter=red)              filtering/searching

4)  get     get(url?limit=10&page=1)         pagination 

5)  get     get(url?sortBy=color&order=asc)  sorting

6)  post    post(url,data)                   create

7)  put     put(url/id,data)                 update

8)  delete  delete(url/id)                   delete

Forms:
=======
1) FormGroup

2) NestedFormGroup

3) FormArray

4) Dynamic Form

5) Form Validations

6) Custom Validations

to create interface:
====================
ng g i vehicle

to activate or create guard:
===========================
ng g g auth
? Which type of guard would you like to create? CanActivate

to install bootstrap and icons: for css
==============================
npm i bootstrap  =>to install bootstrap
npm i bootstrap bootstrap-icons  =>bootstrap + icons
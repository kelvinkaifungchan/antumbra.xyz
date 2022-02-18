install mySQL through homebrew repository, run:
> $ brew install mysql

start the service before setup, run:
> $ brew services start mysql

.then, setup the root user with password, run:
> $ mysql_secure_installation  
![](backend/assests/Screenshot 2022-02-18 at 5.38.18 PM 1.png)

.then, you can connect to mySQL through running:
> $ mysql -u root -p

.then, set up database by running: (in the mySQL env):
> $ CREATE DATABASE "the name you want"  
![](backend/assests/Screenshot 2022-02-18 at 5.35.21 PM.png)

for DB UI, https://tableplus.com or DBeaver can work.  
![](backend/assests/Screenshot 2022-02-18 at 5.28.10 PM.png)  
![](backend/assests/Screenshot 2022-02-18 at 5.29.07 PM.png)  
![](backend/assests/Screenshot 2022-02-18 at 5.32.38 PM.png)  
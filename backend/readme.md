install mySQL through homebrew repository, run:
> $ brew install mysql

start the service before setup, run:
> $ brew services start mysql

.then, setup the root user with password, run:
> $ mysql_secure_installation  

![image](assests/e.png)  

.then, you can connect to mySQL through running:
> $ mysql -u root -p

.then, set up database by running: (in the mySQL env):
> $ CREATE DATABASE "the name you want"  

![image](assests/d.png)

for DB UI, https://tableplus.com or DBeaver can work.  
![image](assests/a.png)  
![image](assests/b.png)  
![image](assests/c.png)  
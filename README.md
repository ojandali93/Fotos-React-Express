# Fotos-React-Express

<h1>FOTOS</h1>
<h3>Photographers best friend. Designer & Editors playground</h3>
<p>
Inspired by the amazing world of photography, Fotos is a web platform that lets photographers post their favorite photos and moments. It also gived editors and designer the ultimate playground to find their next project. Editors can download their favorite raw images and lets thier imagination and skills come to life before uploading their edits which are attached to the original images.
</p></br>
<p>
Fotos was designed and developed using the SERN stack (Sqlite3/Express/Node/React). 
</p><br/><br/>
<h2>Getting started</h2>
<h3>Clone Fotos onto your local machine</h3>
<p>Mac:</p>
<p>On your machine open terminal using ```command + space```</p>
<p>Redirect to your desired folder in which the repo will be cloned down and clone down the project</p>
```
https://github.com/ojandali93/Fotos-React-Express.git
```
<p>Run the following line in terminal to move into the local repo folder</p>
```
cd Fotos-React-Express
```
<h3>Install Mysql onto your local machine</h3>
<p>Click the link to download and setup mysql on your local machine. <a href="https://dev.mysql.com/doc/refman/5.7/en/macos-installation-pkg.html">Click Here</a></p>
<p>Login to your mysql database shell and create a database 'fotos'</p>
<p>Create a super user and give access to the 'fotos' databas that was just created<a href="https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql">Click Here</a> </p>
<p>Open the main project folder in your favorite editor and go to the database access file. ```Fotos-React-Express/backend/models/database.js```</p>
<p>Update the credentials with your superuser username and password on line 6</p>
<h3>Setup Virtual Env & Download Essentials</h3>
<p>Create a virtual environment in order to stabily run the project on your local machine</p>
<p>While in the root folder of the project, run the following command to create a virtual env</p>
```python3 -m venv venv```
<p>Start your local virtual env</p>
``` source venv/bin/activate ```
<p>Next, install all the required packages and run servers</p>
<h3>Setup Servers</h3>
<p>Move into the backend directory of the project</p>
```cd backend```
<p>Initialize and start the server</p>
``` npm install ```
``` npm run start ```
<p>This should startup the backend server</p>
<p>Next step is to start the frontend server</p>
<p>Open a new tab in terminal that will run the frontend server```command + t```</p>
<p>startup the virtual env in the new tab to ensure that everything is running on the same virtual env</p>
``` source venv/bin/activate ```
<p>Move into the frontend folder to run the frontend server</p>
``` cd .. ```
``` cd frontend ```
<p>install requirements and startup server</p>
``` npm install ```
``` npm run start ```
<p>If both servers are running propertly, you can go to the followin link on your browser and run the project</p>
``` localhost:3333/ ```
or
``` 127.0.0.1:3333/ ```
<h1>Enjoy Fotos</h1>
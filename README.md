# Multiusers
(1) YOU NEED TO INSTALL DEPENDENCIES USING COMMAND IN PROJECT DIRECTORY: npm i bcryptjs@2.4.3 ejs@2.6.2express@4.17.1 express-session@1.16. mongoose@5.6.4
    go to project directory npm start
(2)to connect mongodb locally just got to bin folder in your pc
then type command mongod --dbpath path of the data folder in your pc
(3) then connect it to local MOngodb database and create database MultiUsers and collection users
  then go to route of register :http://localhost:3000/register
  for login:http://localhost:3000/login
  for add course:http://localhost:3000/courses/add
  for course list:http://localhost:3000/courses
  for tests:http://localhost:3000/:courseid/tests/add
  for test list:http://localhost:3000/:courseid/tests
  
  Functnalities for tester:
      (1) login,register
      (2)add course and view course list
      (3)add test to specific course and view test list
  Functnalities for developer:
  (1)view course
  (2) view tests
  (3)login and regsiter
  

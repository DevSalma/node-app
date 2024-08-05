# My node app

### Run backend
To run the server, you need to run:
- npm run start
The server will be running at:
http://localhost:1080

The routes available are:
- /user/register - To register a new user
- /user/login - To log in an existing user
- /user/:username - To search for an exisitng user based on their surname

---

### Run backend(Dev)
To run the server, you need to run:
- npm run dev

The server will be running at:
- http://localhost:1080

Some extra routes that can be tested are:
- /user/users - To return all users in the database(dev purposes only)
- /user/:id 
 - To update all of user details
 - To partially update
 - To delete all user details

---

### Run frontend
To run the frontend, you need to run:
- npm start

The frontend will be running at:
- http://localhost:3000

There are 3 routes available:
- /register - For a new user to register
- /login - For an exisiting user to login
- /welcome - Landing page when user's details are validated

#### Extra
Another route available is:
- /lost-password - For users to reset their password(Still in development)
# My node app
### Setup

You need to have 2 terminals setup to run:
- server
- pages

In the first terminal, run:
- cd backend/

Then create a `.env` file by using:
- Terminal: `touch .env`
- Using IDE

Copy all data from `.env.example` to `.env`

---

### Run backend(User)
To run the server, you need to run:
- npm init -y - To generate package.json
- npm install - To install node modules
- npm run start

The server will be running at:
- http://localhost:1080

The routes available are:
- /user/register - To register a new user
- /user/login - To log in an existing user
- /user/:username - To search for an exisitng user based on their surname

---

### Run frontend
To run the frontend, you need to open the second terminal:
- cd frontend/
- npm init -y - To generate package.json
- npm install - To install node modules
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

---

### Run backend(Dev)
To run the server(in first terminal), you need to run:
- npm init -y - To generate package.json(Skip if already installed in User)
- npm install - To install node modules(Skip if already installed in User)
- npm run dev

The server will be running at:
- http://localhost:1080

Some extra routes that can be tested are:
- /user/users - To return all users in the database(dev purposes only)
- /user/:id 
    - To update all of user details
    - To partially update
    - To delete all user details
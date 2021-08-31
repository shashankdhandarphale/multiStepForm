# multiStepForm
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

##Scripts
####yarn install
Installs all the dependencies of the project.

####yarn start

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

#Set up local json server to mock the API
This is helpful when the API is not available for some reasons.

####1. Install json-server globally

```
yarn global add json-server
```
Make sure C:\Users\[user_id]\AppData\Local\Yarn\config\global\node_modules\.bin is in your system Path variable.

####2. Start up json server
Cd into json-server-mock folder and run the following command:
```
json-server --watch db.json --port 3004 --routes routes.json
```
This folder has db.json and routes.json files.
Db.json contains the mock data.
Routes.json contains the route configs.

####3. Start local server

Set the environment variable as follows:
```
set REACT_APP_API_URL=http://localhost:3004
```
Run the local server:
```
yarn start
```

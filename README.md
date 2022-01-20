Tutorial by https://www.youtube.com/watch?v=XtMThy8QKqU&ab_channel=CleverProgrammer

## Step 1
### Create a TMDB Account / API Key
https://www.themoviedb.org/?language=en-US

The TMDB API gives movie info by genre

My API Key
e5708128b95dc520312fb5e84e9f6dde

Running curl https://api.themoviedb.org/3/movie/550?api_key=e5708128b95dc520312fb5e84e9f6dde works!

## Step 2
### Create a react app
In `netflix-react-clone` dir, run `npx create-react-app netflix-clone` This sets up everything

## Set 3
### Set up firebase hosting
Go to firebase.google.com
We use Firebase to deploy the app & host it
* Log-in with gmail
* Add project

#### Add Web app
Click Web button

Register App
* Add nickname (netflix-clone), check box for Firebase Hosting

Add Firebase SDK
* Click next

Install Firebase CLI
* In `netflix-react-clone` dir, run `sudo npm install -g firebase-tools`

## Step 4
### Get all the movies
cd into `netflix-clone`
run `npm start` to start up the react app on localhost:3000

Clean-up
Delete setupTests.js, logo.svg, and App.test.js. Go into App.js & remove entire header. Remove `import logo from './logo.svg';
` Clear out app.css

Install axios
npm i axios

create requests.js (it's not a component, so don't capitalize it). Add in endpoints

create axios.js in src. set-up baseurl logic.

go to App.js
Add rows in div (yes, this dives into step 5)
Create Row.js -- capitalize it bc it's a component

he typed rfce in vscode, but that didn't work for me. I just typed the template.



## Step 5
### Build Rows
Each row is a component. Pass in a prop (standing for properties). Row.js and Row.css and App.js

## Step 6
### Build the Banner
Create Banner.js and Banner.css

## Step 7
### Build the Nav NavBar
Create Nav.js and Nav.css

## Step 8
### Build the Trailer Popups
Use react-youtube to get trailers
`npm i react-youtube`

Use movie-trailer
`npm i movie-trailer`

## Step 9
## Deploy App to Firebase

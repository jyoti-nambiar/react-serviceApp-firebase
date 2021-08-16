# BookingApp2021

This App was developed using npm 7.15.0 and react project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This Project is a ReactJS Project with Firebase used for its backend which demonstrates the following,

1. Creating functional Component in React
2. Managing State of components
3. React routing
4. Firebase setup
5. Firebase Authentication
6. Cloud Firestore: Retrieve and push data
7. Cloud Storage: Upload file and save to database
8. Admin authentication & authorization
9. Stripe integration for payment using card

## Getting Started

1. Clone project and install dependencies.

- git clone
- cd bookingapp2021
- cd bookingapp2021
- npm install
- npm start
  -- Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. Create your Firebase Project in http://console.firebase.google.com.
3. Copy config in dashboard's Web Setup and paste to firebase/config.js.
4. Create your Stripe account in https://dashboard.stripe.com/register.
5. Create a new project in https://dashboard.stripe.com/test/dashboard
6. Copy config set up using https://stripe.com/docs/checkout/integration-builder
7. Get started with using the app using npm start.
8. You can register as an authenticated user by filling in details with the register link.
9. Optional you can sign in with your Google login / facebook login credentials.
10. Admin login have been created for this application with following credentials:
    login email || theadmin.manager@gmail.com
    password || admin123456

## Authentication

See [Firebase Authentication docs.](https://firebase.google.com/docs/auth) firebase.auth()

Sign-In method is using signInWithEmailAndPassword with the login window. When ComponentDidMount was called, auth.onAuthStateChanged will listen to current auth user state. When the user is logged-in, user state in the component will set.

Sign-In method is using GoogleAuthProvider with a pop-up window. When ComponentDidMount was called, auth.onAuthStateChanged will listen to current auth user state. When the user is logged-in, user state in the component will set.

Sign-In method is using FacebookAuthProvider with a pop-up window. When ComponentDidMount was called, auth.onAuthStateChanged will listen to current auth user state. When the user is logged-in, user state in the component will set.

## Cloud Firestore

See [Firebase Database docs.](https://firebase.google.com/docs/firestore) firebase.firestore()

Initially created an object guides as our first collection to push our data. The guidesRef is the database reference for the guides object in firebase. Pushing the new data will also add the current User id, who created the data.

## Cloud Storage

See [Firebase Storage docs.](https://firebase.google.com/docs/storage) firebase.storage()

We have file input to accept images (png|gif|jpeg), onChange will upload the file first to the given storage ref and then get the file path and save to users in database.

## Live Application URL

The Application is deployed on (https://spikspanapp.web.app/)

Click on the link to see the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

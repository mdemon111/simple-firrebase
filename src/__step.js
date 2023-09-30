/**
 * 
 *                    -------------
 *                    INITTAL SETUP
 *                    -------------
 * 1. visit: console.firebase.google.com 
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project 
 *                   ----------------
 *                   INTEGRATION SETUP
 *                   ----------------
 * 6. visit:  Go to Docs > Build > Authentication > Web > Get start 
 * 7. export app from   the firebase.config.js file : export default app
 * 8. Login.jsx: import getAuth from firebase/auth
 * 9. create const auth = getAuth(app)
 *      
 *             --------------
 *             PROVIDER SETUP
 *             ---------------
 * 
 * 10. import googleprovider and create a new provider
 * 11. use signWithPopUp and pass auth and provider
 * 12. activate sign-in method (google, facebook, github, etc)
 * 
 */
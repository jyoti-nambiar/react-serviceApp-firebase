var admin = require("firebase-admin");

var serviceAccount = require("./spikspanapp-firebase-adminsdk-qtqa7-e157112f6b.json");


var uid=process.argv[2];


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(() => {
      console.log("custom claims for user", uid);
      process.exit();
    // The new custom claims will propagate to the user's ID token the
    // next time a new one is issued.
  }).catch(error=>{

    console.log(error);
    process.exit(1);
  })
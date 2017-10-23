import firebase from 'firebase';

try {
  // var config = {
  //   apiKey: process.env.API_KEY,
  //   authDomain: process.env.AUTH_DOMAIN,
  //   databaseURL: process.env.DATABASE_URL,
  //   storageBucket: process.env.STORAGE_BUCKET,
  // };

  var config = {
    apiKey: "AIzaSyCS1r97XBu5E9fySlrmX2K7M745WCq2E8c",
    authDomain: "todoapp-d1d4b.firebaseapp.com",
    databaseURL: "https://todoapp-d1d4b.firebaseio.com",
    projectId: "todoapp-d1d4b",
    storageBucket: "todoapp-d1d4b.appspot.com",
    messagingSenderId: "527261099747"
};

  firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;

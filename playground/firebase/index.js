import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCS1r97XBu5E9fySlrmX2K7M745WCq2E8c",
  authDomain: "todoapp-d1d4b.firebaseapp.com",
  databaseURL: "https://todoapp-d1d4b.firebaseio.com",
  // projectId: "todoapp-d1d4b",
  storageBucket: "todoapp-d1d4b.appspot.com",
  // messagingSenderId: "527261099747"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});

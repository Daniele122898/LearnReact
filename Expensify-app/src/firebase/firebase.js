import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBi-Gm93TRlrpulBGUBhPdsrXfXKbA8ch8",
  authDomain: "expensify-9449c.firebaseapp.com",
  databaseURL: "https://expensify-9449c.firebaseio.com",
  projectId: "expensify-9449c",
  storageBucket: "expensify-9449c.appspot.com",
  messagingSenderId: "886645230633"
};
firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
/*
database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });
*/

/*
database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 19213,
  createdAt: 12837812731
});
*/

/*
database.ref('notes').push({
  title: 'Course topics',
  body: 'React, native, angular'
});
*/

/*
const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
});

setTimeout(()=> {
  database.ref().off('value', onValueChange);
}, 7000);
*/
/*
database.ref()
  .once('value')
  .then((snapshot)=> {
    const data = snapshot.val();
    console.log(data);
  })
  .catch((e)=> {
    console.log('Error fetching data',e)
  });
*/
/*
firebase.database().ref().set({
  name: 'Andrew Mead',
  age: 26,
  job: 'Software developer',
  location: {
    city: 'Philly',
    country: 'US'
  }
}).then(()=> {
  console.log('Saved successfully');
}).catch((e)=> {
  console.log("Notn't'0tnttn",e);
});

firebase.database().ref().update({
  job: 'Manager',
  'location/city': 'Boston'
});
*/
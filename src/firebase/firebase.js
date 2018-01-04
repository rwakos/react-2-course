import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};
/*
const onValueChange = database.ref('expenses')
.on('value', (snapshot) => {
     const expenses = [];
     snapshot.forEach((childSnapshot) => {
           expenses.push({
           id: childSnapshot.key,
           ...childSnapshot.val()
           });
     })
     console.log(expenses);
});
*/
/*
//Notification on Delete child
database.ref('expenses').on('child_removed',(snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//Notification on Change on Child
database.ref('expenses').on('child_changed',(snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added',(snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
*/
/*
database.ref('expenses').push({
    description: "Gas",
    note: "",
    amount: 1200,
    createdAt: 500
});
/*
/*
database.ref('notes/-L0jj4g74vK1ZCLLZQV6').update({
    body: 'React / YM'
});
database.ref('notes/-L0jj4g74vK1ZCLLZQV6').remove();
*/

/*
database.ref('expenses').push({
    description: "Gas",
    note: "",
    amount: 1200,
    createdAt: 500
});
*/

/*
//Add Data Array Style
database.ref('notes').push({
    title: "My TO Do's",
    body: "1. React Course / 2. Monica's Software"
});*/
/*
//Subscribe to Specific Data
const onValueChange = database.ref()
    .on('value',(snapshot) => {
        const val = snapshot.val();
        console.log(`${val.name} is a ${ val.job.title} at ${val.job.company}`);
    }, (e)=>{
        console.log('Error fetching',e);
    });
setTimeout(() => {
    database.ref('job/title').set('CTO');
},3500);

setTimeout(() => {
    database.ref('job/company').set('NetFlix');
},10500);
*/

//GET data Once
/*
database.ref('location')
    .once('value')
    .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data',e);
    })
*/
/*
//GET Live Data
const onValueChange = database.ref()
    .on('value',(snapshot) => {
        const val = snapshot.val();
        console.log(val);
    }, (e)=>{
        console.log('Error fetching',e);
    });
setTimeout(() => {
    database.ref('age').set(71);
},3500);

setTimeout(() => {
    database.ref().off(onValueChange);
},7000);

setTimeout(() => {
    database.ref('age').set(38);
},10500);
*/

//INSERT**************************************************
/*
database.ref().set({
	name: 'Richard Reveron',
	age: 26,
	isSingle: false,
    stressLevel: 6,
    job:{
	  title: 'Software Dev',
      company: 'Google'
    },
	location: {
		city: 'Caracas',
		country: 'Venezuela'
	}
}).then(() => {
    console.log('Data was saved');
}).catch((e) => {
    console.log('this failed: ',e);
});
*/
//UPDATE**************************************************
//Update and add new value/column
//Note: if you go other level you will loose other objects, example { location: { city: 'Alabama'}}, will loose the country
//If want to chenge other levels, you must use / example: location/city
/*
database.ref().update({
    stressLevel: 9,
    'job/company': 'Netflix',
    'location/city': 'Ottawa'
});

database.ref().update({
    name: 'Other',
    age: 39,
    isSingle: null,
    'location/city': 'Toronto',
    job: 'Developer'
});*/


/*
//DELETE**************************************************
//Remove using SET
database.ref('isSingle').set(null);

//DELETE SPECIFIC
var adaRef = firebase.database().ref('isSingle');
adaRef.remove()
    .then(function() {
        console.log("Remove succeeded.")
    })
    .catch(function(error) {
        console.log("Remove failed: " + error.message)
    });

//Delete all
var adaRef = firebase.database().ref();
adaRef.remove()
    .then(function() {
        console.log("Remove succeeded.")
    })
    .catch(function(error) {
        console.log("Remove failed: " + error.message)
    });
*/

//SELECT DATA***********************************************
//Select All
/*database.ref()
    .once('value')
    .then((snapshot) => {
        const data = snapshot.val();
        console.log(data);
    }).catch(function(error) {
        console.log("Remove failed: " + error.message)
    });

database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const data = snapshot.val();
        console.log(data);
    }).catch(function(error) {
    console.log("Remove failed: " + error.message)
});
*/
//Listen for changes...
/*
const onValueChange = database.ref().on('value', (snapshot) => {
        console.log(snapshot.val());
    }, (e) => {
        console.log('Error fetching', e);
    });

setTimeout(() => { database.ref('location/city').set('Toronto OT'); }, 3000);
setTimeout(() => { database.ref('age').set(38); }, 5000);
setTimeout(() => {
    database.ref().off(onValuechange);
    }, 7000); //Remove subscription...
setTimeout(() => { database.ref('age').set(39); }, 9000);
*/
/*
database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${ val.job.title} at ${val.job.company}`);
}, (e) => {
    console.log('Error fetching', e);
});
*/

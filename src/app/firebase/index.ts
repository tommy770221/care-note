// import {FirebaseOptions, initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// import {connectAuthEmulator, getAuth} from 'firebase/auth';
// import {getDatabase,connectDatabaseEmulator} from 'firebase/database';
// import {environment} from 'environments/environment';
// import * as firebase from 'firebase/app';
// import 'firebase/database';
//
// const firebaseConfig: firebase.FirebaseOptions = environment.FIREBASE_CONFIG || {
//     apiKey: 'demo-MOCK_KEY',
//     projectId:'demo-MOCK_PROJECT_ID',
//     appId:'demo-MOCK',
//     authDomain:'http://localhost:9099',
//     databaseURL:'http://localhost:9000',
//     storageBucket:'http://localhost:9199',
//     messagingSenderId:'demo-MOCK',
//     measurementId:'demo-MOCK',
// };
//
// const app = firebase.initializeApp(firebaseConfig);
// //export const fireAnalytics = getAnalytics(app);
//
// export const firebaseAuth = getAuth(app);
// export const fireDatabase = getDatabase();
// if (environment.NODE_ENV !== 'production') {
//     connectAuthEmulator(firebaseAuth, 'http://localhost:9099');
//     connectDatabaseEmulator(fireDatabase,'localhost',9000);
// }

import { initializeApp } from "firebase/app";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'desafio3chat',
    appId: '1:112836592552:web:03764c99b3ed5d51f1939d',
    storageBucket: 'desafio3chat.appspot.com',
    locationId: 'asia-east2',
    apiKey: 'AIzaSyD6SiNwWQDfvhyrzsFvdoi25BPA1cM3Jgw',
    authDomain: 'desafio3chat.firebaseapp.com',
    messagingSenderId: '112836592552',
  },
  production: false,
    firebaseConfig: {
    apiKey: "AIzaSyD6SiNwWQDfvhyrzsFvdoi25BPA1cM3Jgw",
    authDomain: "desafio3chat.firebaseapp.com",
    projectId: "desafio3chat",
    storageBucket: "desafio3chat.appspot.com",
    messagingSenderId: "112836592552",
    appId: "1:112836592552:web:f03cf5566e8e3178f1939d"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

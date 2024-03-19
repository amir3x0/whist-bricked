"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
const auth_1 = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5Pm51BbSML0UijPTfnGqShLNAaVoa1VQ",
    authDomain: "whist-origin.firebaseapp.com",
    projectId: "whist-origin",
    storageBucket: "whist-origin.appspot.com",
    messagingSenderId: "525608617328",
    appId: "1:525608617328:web:3ee53b09964c449d3cfbb5",
    measurementId: "G-BTDT67WHCF"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
const analytics = (0, analytics_1.getAnalytics)(app);

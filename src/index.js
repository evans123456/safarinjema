import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC65E5EHVM6evSzr7okTvXW7BhzdJzz2LY",
    authDomain: "safari-njema.firebaseapp.com",
    databaseURL: "https://safari-njema.firebaseio.com",
    projectId: "safari-njema",
    storageBucket: "safari-njema.appspot.com",
    messagingSenderId: "737880508047"
};

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

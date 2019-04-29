import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import * as firebase from 'firebase';

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "drum-machine-5bfd0.firebaseapp.com",
  databaseURL: "https://drum-machine-5bfd0.firebaseio.com",
  projectId: "drum-machine-5bfd0",
  storageBucket: "drum-machine-5bfd0.appspot.com",
  messagingSenderId: "620669528200"
};
firebase.initializeApp(config);

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk)//,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //Uncomment above to use redux dev tools for chrome
  )
);

export default store;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
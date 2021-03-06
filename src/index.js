import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCy8IS8xClNNUi84xs5_49eMN-6MOBK3A4",
  authDomain: "react-blog-be4b5.firebaseapp.com",
  projectId: "react-blog-be4b5",
  storageBucket: "react-blog-be4b5.appspot.com",
  messagingSenderId: "921413593132",
  appId: "1:921413593132:web:3436a90798910b39f6c989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getFirestore(app)
export default db;


const root = ReactDOM.createRoot(document.getElementById('root')||document.createElement('div'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


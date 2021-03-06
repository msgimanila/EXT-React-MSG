//import '@sencha/ext-classic-enterprise';
//import '@sencha/ext-classic-material';
//import '@sencha/ext-classic-triton';
import React from 'react';
//import ReactDOM from 'react-dom';
import ExtReactDOM from '@sencha/ext-react-classic';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ExtReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

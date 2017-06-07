/**
 * Created by pratikgarala on 7/6/17.
 */

//Entry Point of the application

import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app';
import {Provider} from 'react-redux';
// import {store} from './store/store';


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// export default store;
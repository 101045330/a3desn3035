import React from 'react';
import ReactDOM from 'react-dom/client';


//css files //
import './styles/reset.css';
import './styles/print.css';
import './styles/accessibility.css';


//custom layout
import './styles/layout.css';
//default design
import './styles/default.css';


//design system override
import './styles/design.css';
//icons, forms, charts, tabs 
import './styles/icons.css';
import './styles/forms.css';
import './styles/chart.css';
import 'react-tabs/style/react-tabs.css';


//fonts
import './styles/typography.css';

//***PENDING ***//
//<!-- ADDED USING JS // link rel="stylesheet" href="css/design/mediaQuery.css"-->
//<!--link rel="stylesheet" href="css/design/formMediaQuery.css"-->
//import './styles/formMediaQuery.css';

// OK //
//import './utils/jquery-3.7.1.min.js';
//import './utils/preloader.js';//npm i jquery used 
//<script src="js/preloader.js"></script>
//OK //<link rel="stylesheet" href="css/design/preloader.css">
//import './styles/preloader.css';

//JAVASCRIPTS//

//<!-- Default MediaQuery before custom overriding-->
//<script src="js/mediaQueryForAllScreen.js"></script>

//****PENDING */
//import './utils/mediaQueryForAllScreen.js';
//<script>
//   //Custom made script for this assignment that injects :
//   window.addEventListener('load', applyMediaQueries);
//   window.addEventListener('resize', applyMediaQueries);
// </script>

/**/

// Import JavaScript files
/*
import $ from 'jquery';
import './utils/preloader.js';
import './utils/mediaQueryForAllScreen.js';
*/

//importing all js files
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

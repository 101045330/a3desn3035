import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//importing all css files
import './styles/accessibility.css';
//import './styles/all.css'; //requires prototype.png
//import './styles/chart.css';
//import './styles/default.css';
//import './styles/formMediaQuery.css';
//import './styles/forms.css';
//import './styles/hint.css';
//import './styles/icons.css';
//import './styles/mediaQuery2.css';
//import './styles/preloader.css';
//import './styles/typography.css';

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

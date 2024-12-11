// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


//<header>
import Header from './components/Header';
//<main>
import Main from './components/Main';
//<footer>
import Footer from './components/Footer';

const App = () => {

  // Custom script for media queries
  /* React.useEffect(() => {
     const applyMediaQueries = () => {
       // Your media query logic here
     };
 
     window.addEventListener('load', applyMediaQueries);
     window.addEventListener('resize', applyMediaQueries);
 
     return () => {
       window.removeEventListener('load', applyMediaQueries);
       window.removeEventListener('resize', applyMediaQueries);
     };
   }, []);
 */
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Main>
        </Main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// OK //
//import './utils/jquery-3.7.1.min.js';
//import './utils/preloader.js';//npm i jquery used 
//<script src="js/preloader.js"></script>
//OK //<link rel="stylesheet" href="css/design/preloader.css">
//import './styles/preloader.css';

//css files //

//<!-- Default CSS file(s) -->
import './styles/default.css';
//<!-- Layout CSS file(s) -->
import './styles/layout.css';

//<!-- Accessibility CSS file(s) -->
//<link rel="stylesheet" href="css/design/accessibility.css">
import './styles/accessibility.css';
//***PENDING ***//
//<!-- ADDED USING JS // link rel="stylesheet" href="css/design/mediaQuery.css"-->
//<!--link rel="stylesheet" href="css/design/formMediaQuery.css"-->
//import './styles/formMediaQuery.css';

//<!-- Design CSS file(s) -->
//<link rel="stylesheet" href="css/design/typography.css">
import './styles/typography.css';
//<link rel="stylesheet" href="css/design/icons.css">
import './styles/icons.css';
//<link rel="stylesheet" href="css/design/forms.css">
import './styles/forms.css';
//<link rel="stylesheet" href="css/design/chart.css">
//***CHART pending */
//<!--remaining  style definition -->
//<link rel="stylesheet" href="css/design/all.css">
import './styles/all.css';

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


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

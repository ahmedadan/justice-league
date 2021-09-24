import './App.css';
import WelcomePage from './pages/welcome.js'
import IndividualProfile from './pages/individualprofile.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <WelcomePage/>
//       <IndividualProfile />
//     </div>
//   );
// }

// export default App;


const showIndividualProfile = () => {
  if (window.location.pathname === "/") {
    return <WelcomePage/>;
  }
};

const showWelcomePage = () => {
  if (window.location.pathname === "/individualprofile" || window.location.pathname === "/individual") {
    return <IndividualProfile />;
  }
};



const App = () => {
  return (
    <div>
      {showWelcomePage()}
      {showIndividualProfile()}
    </div>
  );
};
export default App;
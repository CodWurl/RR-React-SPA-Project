//import logo from './logo.svg';
import './App.css';
//import { useSelector, useDispatch} from 'react-redux'
import navBar from './components/navBar'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/Blog' component={Cats} />
        <Route path='/About Me' component={Sheeps} />
        <Route path='/goats' component={Goats} />
      </Switch>
      
    </Router>
  );
}

export default App;

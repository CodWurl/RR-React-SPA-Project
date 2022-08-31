//import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from 'react-redux'
import NavBar from './components/NavBar'

function App() {

  const dispatch = useDispatch();
  const mode = useSelector (state => state);

  return (
    <div className="App">
     <NavBar></NavBar>
    </div>
  );
}

export default App;

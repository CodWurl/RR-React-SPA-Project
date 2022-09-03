import './App.css';
import Nav from './components/Nav'
import { useSelector, useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch();
  const mode = useSelector (state => state);
  
  
  const onModeChange = () => {
    const actionCreator = mode.darkMode ? setLightMode : setDarkMode;
    dispatch(actionCreator())
  }
  
  return (

    
    <div>
      <Nav />
      
    </div>
    
  );
}

export default App;

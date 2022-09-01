import './App.css';
import Nav from './components/Nav'
//import ContentWrapper from './components/ContentWrapper'
//import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux'
//import {setDarkMode, setLightMode} from './features/modeSlice';

function App() {
  const dispatch = useDispatch();
  const mode = useSelector (state => state);
  
  
  const onModeChange = () => {
    const actionCreator = mode.darkMode ? setLightMode : setDarkMode;
    dispatch(actionCreator())
  }
  
  return (
    <div>
      <button type="button" onClick ={onModeChange}>Toggle Mode</button>
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;

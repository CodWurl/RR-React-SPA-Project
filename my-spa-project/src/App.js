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
      <Nav />
      
    </div>
  );
}

const myStyle={
  backgroundImage: 
"url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
  height:'100vh',
  marginTop:'-70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
return (
<div style={myStyle}>
  <h1> geeksforgeeks </h1>
</div>
);



export default App;

import "./App.css";
import Nav from "./components/Nav";
//import ContentWrapper from './components/ContentWrapper'
//import Footer from './components/Footer'
import { useSelector, useDispatch } from "react-redux";
//import {setDarkMode, setLightMode} from './features/modeSlice';

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state);

  const onModeChange = () => {
    const actionCreator = mode.darkMode ? setLightMode : setDarkMode;
    dispatch(actionCreator());
  };

  return (
    <header>
      <h1 className="title"> Welcome To Michael's Portfolio</h1>
      <div>
        <div class="topnav">
          <a class="active" href="#home"> Home</a>
          <a href="#news">About Me</a>
          <a href="#contact">Projects</a>
          <a href="#about">Other</a>
        </div>
      </div>
    </header>
  );
}

export default App;

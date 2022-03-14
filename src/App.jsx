import './app.css';
import About from "./about/About";
import Intro from "./components/intro/Intro";
import Portfolio from "./portfolio/Portfolio";
import Footer from './footer/Footer';
import Skills from './skills/Skills';
import Toggle from './toogle/Toggle';
import { useContext } from 'react';
import { themeContext } from './context';

const App = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black'}}>
      <Toggle />
      <Intro />
      <About />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
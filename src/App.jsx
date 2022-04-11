import './app.css';


import { ThemeProvider, useTheme } from './context';

import About from "./about/About";
import Footer from './footer/Footer';
import Skills from './skills/Skills';
import Intro from "./components/intro/Intro";
import Portfolio from "./portfolio/Portfolio";
import ThemeToggle from './toogle/ThemeToggle';

const RootScreen = () => {
  const { darkMode } = useTheme();

  return (
    <div style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black'}}>
      <ThemeToggle />
      <Intro />
      <About />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
};

export default function App(){
    return (
        <ThemeProvider>
            <RootScreen />
        </ThemeProvider>
    )
};

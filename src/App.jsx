import './app.css';

import { ThemeToggle } from './common/components';
import { ThemeProvider, useTheme } from './common/components';

import { Intro, About, Skills, Projects, Contact } from './pages';
import { Nav } from './common/components/nav/nav';

const RootScreen = () => {
  const { darkMode } = useTheme();

  return (
    <div style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black'}}>
      <Nav />
      <div className='content-wrapper'>
        <Intro />
        <About />
        <Projects />
        <Skills />
      </div>
      <Contact />
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

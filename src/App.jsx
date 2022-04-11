import './app.css';

import { ThemeToggle } from './common/components';
import { ThemeProvider, useTheme } from './common/components';

import { Intro, About, Skills, Projects, Contact } from './pages';

const RootScreen = () => {
  const { darkMode } = useTheme();

  return (
    <div style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black'}}>
      <ThemeToggle />
      <Intro />
      <About />
      <Projects />
      <Skills />
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

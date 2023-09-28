import SharedLayout from './components/SharedLayout';
import Home from './components/Home'
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("Dark");
  const [Line, setLine] = useState("white");
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    if (isDarkMode === true) {
      setTheme('Light')
      setLine("black")
    } else {
      setTheme('Dark')
      setLine("white")
    }  };
  return (
    <ThemeContext.Provider>
      <div className='App' id={theme.toLowerCase()}>
        <SharedLayout onChange={toggleDarkMode} checked={isDarkMode}/>
        <Home theme={Line}/>
      </div>
    </ThemeContext.Provider>


    //  <>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<SharedLayout />}>
    //         <Route index element={<Home />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    //  </>
  )


}

export default App;
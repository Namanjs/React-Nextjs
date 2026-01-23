import {createContext,useContext, useState} from 'react'

// create theme context
const ThemeContext = createContext();

//theme provider component
export function ThemeProvider({children}){
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevtheme) => (prevtheme === 'light' ? 'dark' : 'light'))
  }

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

//custom hook to use theme
export function useTheme(){
  const context = useContext(ThemeContext);

  if(!context){
    throw new Error("useTheme must be used within Themeprovider")
  }

  return context;
}

function ThemeToggleButton(){
  const {theme, toggleTheme, isDark} = useTheme()
  return(
    <button onClick={toggleTheme}>{isDark ? "🌑" : "☀️"}</button>
  )
}

function ThemeToggler() {
  return (
    <div>
      
    </div>
  )
}

export default ThemeToggler

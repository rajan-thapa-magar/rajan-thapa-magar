import { createContext, useReducer } from "react";

export const themeContext = createContext()

const INITIAL_STATE = { darkMode: false }

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode }
    
    default:
      return state
  }
}

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)

  return (
    <themeContext.Provider value={{state, dispatch}}>{ props.children }</themeContext.Provider>
  )
}
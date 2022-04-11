import {createContext, useCallback, useContext, useReducer} from "react";

const themeContext = createContext()

const INITIAL_STATE = { darkMode: false }

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode }

    default:
      return state
  }
}

const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)

  return (
    <themeContext.Provider value={{state, dispatch}}>{ props.children }</themeContext.Provider>
  )
}

const useTheme = () => {
  const { state: { darkMode }, dispatch } = useContext(themeContext);

  const toggleTheme = useCallback(() => dispatch({type: 'TOGGLE'}), [dispatch]);

  return {
    darkMode,
    toggleTheme,
  }
};

export { ThemeProvider, useTheme }

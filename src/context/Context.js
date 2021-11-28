import React from 'react'

const Context = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
})

export default Context
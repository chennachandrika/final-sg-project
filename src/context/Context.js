import React from 'react'

const Context = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideoList:[],
  addVideoItem:() => {},
  removeVideoItem:() => {},
})

export default Context
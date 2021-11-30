import React from "react";

const Context = React.createContext({
  isDarkTheme: false,
  savedVideoList: [],
  usersList: [],
  addUserDetails: () => {},
  toggleTheme: () => {},
  addVideoItem: () => {},
  removeVideoItem: () => {}
});

export default Context;
